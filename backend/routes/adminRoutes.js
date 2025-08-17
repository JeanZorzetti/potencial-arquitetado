const express = require('express');
const router = express.Router();

console.log('🔧 Loading admin controller...');
const {
  login,
  getAllArticles,
  createArticle,
  updateArticle,
  deleteArticle,
  seedDatabase,
} = require('../controllers/adminController');

console.log('🔧 Loading auth middleware...');
const { authMiddleware } = require('../middleware/authMiddleware');

console.log('✅ Admin dependencies loaded successfully');

// POST /api/auth/login
console.log('📝 Registering route: POST /api/auth/login');
router.post('/auth/login', login);

// GET /api/articles/all
console.log('📝 Registering route: GET /api/articles/all');
router.get('/articles/all', authMiddleware, getAllArticles);

// POST /api/articles
console.log('📝 Registering route: POST /api/articles');
router.post('/articles', authMiddleware, createArticle);

// PUT /api/articles/:id
console.log('📝 Registering route: PUT /api/articles/:id');
router.put('/articles/:id', authMiddleware, updateArticle);

// DELETE /api/articles/:id
console.log('📝 Registering route: DELETE /api/articles/:id');
router.delete('/articles/:id', authMiddleware, deleteArticle);

// POST /api/seed - Manual database seeding
console.log('📝 Registering route: POST /api/seed');
router.post('/seed', seedDatabase);

console.log('✅ All admin routes registered successfully');
module.exports = router;