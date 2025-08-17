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
    
    // Tentar diferentes approaches para o hash
    const hashedPassword1 = await bcrypt.hash('password123', 10);
    const hashedPassword2 = await bcrypt.hash('password123', await bcrypt.genSalt(10));
    
    console.log('🔐 Method 1 hash:', hashedPassword1);
    console.log('🔐 Method 2 hash:', hashedPassword2);
    
    // Testar ambos os hashes
    const test1 = await bcrypt.compare('password123', hashedPassword1);
    const test2 = await bcrypt.compare('password123', hashedPassword2);
    
    console.log('🧪 Method 1 test:', test1);
    console.log('🧪 Method 2 test:', test2);
    
    // Usar o método que funcionar
    const finalHash = test1 ? hashedPassword1 : hashedPassword2;
    console.log('🎯 Using hash:', finalHash);
    
    const newUser = new User({
      name: 'Admin',
      email: 'admin@example.com',
      password: finalHash,
    });
    
    await newUser.save();
    console.log('✅ Fresh admin user created successfully!');
    console.log('📧 Email: admin@example.com');
    console.log('🔑 Password: password123');
    
    // Teste final após salvar
    const savedUser = await User.findOne({ email: 'admin@example.com' });
    const finalTest = await bcrypt.compare('password123', savedUser.password);
    console.log('🧪 Final test with saved user:', finalTest);
    
    // Seed artigos se não existirem
    const Article = require('./models/Article');
    const articleCount = await Article.countDocuments();
    console.log('📊 Articles in database:', articleCount);
    
    if (articleCount === 0) {
      console.log('📝 Creating sample articles...');
      
      const sampleArticles = [
        {
          title: 'Como Desenvolver Inteligência Emocional',
          slug: 'como-desenvolver-inteligencia-emocional',
          content: '<p>A inteligência emocional é fundamental para o sucesso profissional. Neste artigo, você vai aprender técnicas práticas para desenvolver essa habilidade essencial.</p>',
          excerpt: 'Aprenda técnicas práticas para desenvolver inteligência emocional e acelerar sua carreira profissional.',
          category: 'Desenvolvimento Pessoal',
          status: 'published',
          isFeatured: true,
          publishedAt: new Date(),
          author: savedUser._id
        },
        {
          title: '5 Soft Skills Essenciais para Líderes',
          slug: '5-soft-skills-essenciais-lideres',
          content: '<p>Descubra as 5 soft skills mais importantes que todo líder deve dominar para ser mais eficaz.</p>',
          excerpt: 'As 5 soft skills que diferenciam grandes líderes dos demais profissionais.',
          category: 'Liderança',
          status: 'published',
          isFeatured: true,
          publishedAt: new Date(),
          author: savedUser._id
        }
      ];
      
      for (const articleData of sampleArticles) {
        const article = new Article(articleData);
        await article.save();
        console.log('✅ Created article:', article.title);
      }
      
      console.log('🎉 Sample articles created successfully!');
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