const express = require('express');
const router = express.Router();
const {
  login,
  getAllArticles,
  createArticle,
  updateArticle,
  deleteArticle,
} = require('../controllers/adminController');
const { authMiddleware } = require('../middleware/authMiddleware');

// POST /api/auth/login
router.post('/auth/login', login);

// GET /api/articles/all
router.get('/articles/all', authMiddleware, getAllArticles);

// POST /api/articles
router.post('/articles', authMiddleware, createArticle);

// PUT /api/articles/:id
router.put('/articles/:id', authMiddleware, updateArticle);

// DELETE /api/articles/:id
router.delete('/articles/:id', authMiddleware, deleteArticle);

module.exports = router;