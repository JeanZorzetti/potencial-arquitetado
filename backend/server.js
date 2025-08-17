const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

const publicRoutes = require('./routes/publicRoutes');
const adminRoutes = require('./routes/adminRoutes');

dotenv.config();

// Initialize database and create admin user if needed
const initializeApp = async () => {
  try {
    await connectDB();
    
    // Auto-create admin user
    const bcrypt = require('bcryptjs');
    const User = require('./models/User');
    
    console.log('🔍 Checking for admin user...');
    const adminExists = await User.findOne({ email: 'admin@example.com' });
    
    if (adminExists) {
      console.log('🔄 Removing existing admin user to recreate...');
      await User.deleteOne({ email: 'admin@example.com' });
    }
    
    console.log('👤 Creating fresh admin user...');
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('password123', salt);
    
    // Log do hash para debug
    console.log('🔐 Generated hash for password123:', hashedPassword);
    
    const newUser = new User({
      name: 'Admin',
      email: 'admin@example.com',
      password: hashedPassword,
    });
    
    await newUser.save();
    console.log('✅ Fresh admin user created successfully!');
    console.log('📧 Email: admin@example.com');
    console.log('🔑 Password: password123');
    
    // Testar o hash imediatamente
    const testMatch = await bcrypt.compare('password123', hashedPassword);
    console.log('🧪 Hash test result:', testMatch);
  } catch (error) {
    console.error('❌ App initialization failed:', error);
  }
};

initializeApp();

const app = express();

// CORS configuration
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://arquiteturadopotencial.roilabs.com.br', 'https://www.arquiteturadopotencial.roilabs.com.br']
    : ['http://localhost:8080', 'http://localhost:3000', 'http://localhost:5173'],
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Arquitetura do Potencial API',
    version: '1.0.0',
    status: 'running',
    docs: '/api/docs'
  });
});

// API routes
console.log('🔧 Loading public routes...');
app.use('/api', publicRoutes);

console.log('🔧 Loading admin routes...');
app.use('/api', adminRoutes);

console.log('✅ All routes loaded successfully');

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'production' ? {} : err.stack
  });
});

// 404 handler
app.use('*', (req, res) => {
  console.log(`❌ Route not found: ${req.method} ${req.originalUrl}`);
  
  // List all registered routes for debugging
  const routes = [];
  app._router.stack.forEach((middleware) => {
    if (middleware.route) {
      routes.push(`${Object.keys(middleware.route.methods)[0].toUpperCase()} ${middleware.route.path}`);
    } else if (middleware.name === 'router') {
      middleware.handle.stack.forEach((handler) => {
        if (handler.route) {
          const prefix = middleware.regexp.source.replace(/\$.*/, '').replace(/^\^\\?/, '').replace(/\\\//g, '/');
          routes.push(`${Object.keys(handler.route.methods)[0].toUpperCase()} ${prefix}${handler.route.path}`);
        }
      });
    }
  });

  res.status(404).json({
    message: 'Route not found',
    requestedUrl: req.originalUrl,
    method: req.method,
    availableRoutes: routes.length > 0 ? routes : [
      'GET /health',
      'GET /',
      'GET /api/articles',
      'GET /api/articles/:slug', 
      'POST /api/newsletter/subscribe',
      'POST /api/contact',
      'POST /api/auth/login',
      'GET /api/articles/all',
      'POST /api/articles',
      'PUT /api/articles/:id',
      'DELETE /api/articles/:id'
    ]
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
  console.log(`🏠 API Base URL: http://localhost:${PORT}`);
  console.log(`❤️  Health check: http://localhost:${PORT}/health`);
});