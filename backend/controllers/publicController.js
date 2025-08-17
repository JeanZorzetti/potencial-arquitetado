const Article = require('../models/Article');
const Subscriber = require('../models/Subscriber');
const ContactMessage = require('../models/ContactMessage');
const { validationResult } = require('express-validator');

// GET /api/articles
const getArticles = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  try {
    const articles = await Article.find({ status: 'published' })
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(limit);
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// GET /api/articles/featured
const getFeaturedArticles = async (req, res) => {
  try {
    const articles = await Article.find({ isFeatured: true, status: 'published' })
      .sort({ publishedAt: -1 })
      .limit(3);
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// GET /api/articles/:slug
const getArticleBySlug = async (req, res) => {
  try {
    const article = await Article.findOne({ slug: req.params.slug, status: 'published' });
    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }
    res.json(article);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// POST /api/newsletter/subscribe
const subscribeToNewsletter = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email } = req.body;

  try {
    let subscriber = await Subscriber.findOne({ email });
    if (subscriber) {
      return res.status(400).json({ error: 'Email already subscribed' });
    }

    subscriber = new Subscriber({ email });
    await subscriber.save();

    res.status(201).json({ message: 'Successfully subscribed' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// POST /api/contact
const createContactMessage = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, message } = req.body;

  try {
    const contactMessage = new ContactMessage({ name, email, message });
    await contactMessage.save();

    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  getArticles,
  getFeaturedArticles,
  getArticleBySlug,
  subscribeToNewsletter,
  createContactMessage,
};