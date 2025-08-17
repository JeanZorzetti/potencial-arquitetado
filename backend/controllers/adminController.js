const Article = require('../models/Article');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

// POST /api/auth/login
const login = async (req, res) => {
  console.log('🔐 Login attempt:', { body: req.body });
  
  const { email, password } = req.body;
  
  // Basic validation
  if (!email || !password) {
    console.log('❌ Missing email or password');
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    console.log('🔍 Looking for user with email:', email);
    const user = await User.findOne({ email });
    
    if (!user) {
      console.log('❌ User not found');
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    
    console.log('✅ User found:', user.email);

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('❌ Password mismatch');
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    
    console.log('✅ Password match');

    const payload = { id: user.id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    
    console.log('✅ Login successful');

    res.json({ 
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    console.error('❌ Login error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// GET /api/articles/all
const getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find().sort({ createdAt: -1 });
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// POST /api/articles
const createArticle = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { title, content, excerpt, featuredImage, category, status, publishedAt } = req.body;

  try {
    const slug = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

    const newArticle = new Article({
      title,
      slug,
      content,
      excerpt,
      featuredImage,
      category,
      status,
      publishedAt,
      author: req.user.id,
    });

    const article = await newArticle.save();
    res.status(201).json(article);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// PUT /api/articles/:id
const updateArticle = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { title, content, excerpt, featuredImage, category, status, publishedAt } = req.body;

  try {
    let article = await Article.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }

    // Update slug if title changes
    let slug = article.slug;
    if (title) {
      slug = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    }

    const updatedArticle = await Article.findByIdAndUpdate(
      req.params.id,
      { $set: { title, slug, content, excerpt, featuredImage, category, status, publishedAt } },
      { new: true }
    );

    res.json(updatedArticle);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// DELETE /api/articles/:id
const deleteArticle = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }

    await Article.findByIdAndDelete(req.params.id);

    res.json({ message: 'Article removed' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  login,
  getAllArticles,
  createArticle,
  updateArticle,
  deleteArticle,
};