const Article = require('../models/Article');
const Subscriber = require('../models/Subscriber');
const ContactMessage = require('../models/ContactMessage');
const { validationResult } = require('express-validator');

// GET /api/articles
const getArticles = async (req, res) => {
  console.log('📚 Getting articles');
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  try {
    const articles = await Article.find({ status: 'published' })
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(limit);
    
    console.log(`✅ Found ${articles.length} published articles`);
    res.json(articles);
  } catch (error) {
    console.error('❌ Get articles error:', error);
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
  console.log('📧 Newsletter subscription attempt:', req.body);
  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log('❌ Validation errors:', errors.array());
    return res.status(400).json({ errors: errors.array() });
  }

  const { email } = req.body;
  
  if (!email) {
    console.log('❌ No email provided');
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    // Try MongoDB first
    let subscriber = await Subscriber.findOne({ email });
    if (subscriber) {
      console.log('❌ Email already subscribed');
      return res.status(400).json({ error: 'E-mail já está inscrito na newsletter' });
    }

    subscriber = new Subscriber({ email });
    await subscriber.save();
    
    console.log('✅ Subscriber saved to MongoDB:', email);
    res.status(201).json({ message: 'Successfully subscribed' });
  } catch (error) {
    console.error('❌ MongoDB error, trying fallback:', error.message);
    
    // Fallback: Save to local file
    try {
      const fs = require('fs');
      const path = require('path');
      const subscribersFile = path.join(__dirname, '..', 'data', 'subscribers.json');
      
      // Create data directory if it doesn't exist
      const dataDir = path.dirname(subscribersFile);
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      
      // Read existing subscribers
      let subscribers = [];
      if (fs.existsSync(subscribersFile)) {
        const data = fs.readFileSync(subscribersFile, 'utf8');
        subscribers = JSON.parse(data);
      }
      
      // Check if email already exists
      if (subscribers.some(sub => sub.email === email)) {
        console.log('❌ Email already subscribed (fallback)');
        return res.status(400).json({ error: 'E-mail já está inscrito na newsletter' });
      }
      
      // Add new subscriber
      subscribers.push({
        email,
        subscribedAt: new Date(),
        active: true
      });
      
      // Save to file
      fs.writeFileSync(subscribersFile, JSON.stringify(subscribers, null, 2));
      
      console.log('✅ Subscriber saved to fallback file:', email);
      res.status(201).json({ message: 'Successfully subscribed (saved locally)' });
    } catch (fallbackError) {
      console.error('❌ Fallback also failed:', fallbackError);
      res.status(500).json({ error: 'Server error' });
    }
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