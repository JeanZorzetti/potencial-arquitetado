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
    
    // Auto-create admin user in production
    if (process.env.NODE_ENV === 'production') {
      const bcrypt = require('bcryptjs');
      const User = require('./models/User');
      
      const adminExists = await User.findOne({ email: 'admin@example.com' });
      if (!adminExists) {
        console.log('👤 Creating default admin user...');
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash('password123', salt);
        const newUser = new User({
          name: 'Admin',
          email: 'admin@example.com',
          password: hashedPassword,
        });
        await newUser.save();
        console.log('✅ Admin user created successfully!');
      }
    }
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
app.use('/api', publicRoutes);
app.use('/api', adminRoutes);

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
  res.status(404).json({
    message: 'Route not found',
    availableRoutes: ['/api/articles', '/api/newsletter/subscribe', '/api/contact']
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
  console.log(`🏠 API Base URL: http://localhost:${PORT}`);
  console.log(`❤️  Health check: http://localhost:${PORT}/health`);
});