const express = require('express');
const router = express.Router();
const {
  getArticles,
  getFeaturedArticles,
  getArticleBySlug,
  subscribeToNewsletter,
  createContactMessage,
} = require('../controllers/publicController');
const { getPublicSettings } = require('../controllers/adminController');

// GET /api/articles
router.get('/articles', getArticles);

// GET /api/articles/featured
router.get('/articles/featured', getFeaturedArticles);

// GET /api/articles/:slug
router.get('/articles/:slug', getArticleBySlug);

// POST /api/newsletter/subscribe
router.post('/newsletter/subscribe', subscribeToNewsletter);

// POST /api/contact
router.post('/contact', createContactMessage);

// GET /api/settings/public - Public settings
router.get('/settings/public', getPublicSettings);

module.exports = router;