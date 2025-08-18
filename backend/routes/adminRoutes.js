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
  clearAllArticles,
  getAllSubscribers,
  deleteSubscriber,
  getAllMessages,
  markMessageAsRead,
  deleteMessage,
  getStats,
  getSettings,
  updateSettings,
  resetSettings,
  getPublicSettings,
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

// POST /api/clear - Clear all articles
console.log('📝 Registering route: POST /api/clear');
router.post('/clear', clearAllArticles);

// GET /api/stats - Dashboard statistics
console.log('📝 Registering route: GET /api/stats');
router.get('/stats', authMiddleware, getStats);

// GET /api/subscribers - Get all subscribers
console.log('📝 Registering route: GET /api/subscribers');
router.get('/subscribers', authMiddleware, getAllSubscribers);

// DELETE /api/subscribers/:id - Delete subscriber
console.log('📝 Registering route: DELETE /api/subscribers/:id');
router.delete('/subscribers/:id', authMiddleware, deleteSubscriber);

// GET /api/messages - Get all messages
console.log('📝 Registering route: GET /api/messages');
router.get('/messages', authMiddleware, getAllMessages);

// PUT /api/messages/:id/read - Mark message as read
console.log('📝 Registering route: PUT /api/messages/:id/read');
router.put('/messages/:id/read', authMiddleware, markMessageAsRead);

// DELETE /api/messages/:id - Delete message
console.log('📝 Registering route: DELETE /api/messages/:id');
router.delete('/messages/:id', authMiddleware, deleteMessage);

// GET /api/settings - Get settings
console.log('📝 Registering route: GET /api/settings');
router.get('/settings', authMiddleware, getSettings);

// PUT /api/settings - Update settings
console.log('📝 Registering route: PUT /api/settings');
router.put('/settings', authMiddleware, updateSettings);

// POST /api/settings/reset - Reset settings
console.log('📝 Registering route: POST /api/settings/reset');
router.post('/settings/reset', authMiddleware, resetSettings);

console.log('✅ All admin routes registered successfully');
module.exports = router;