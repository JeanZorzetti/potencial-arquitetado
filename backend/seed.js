const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const User = require('./models/User');
const Article = require('./models/Article');
const connectDB = require('./config/db');

dotenv.config();

const seedData = async () => {
  try {
    console.log('🔌 Connecting to database...');
    await connectDB();
    
    console.log('🔍 Checking current articles...');
    const articleCount = await Article.countDocuments();
    console.log(`📊 Current articles: ${articleCount}`);
    
    console.log('🔍 Checking users...');
    const userCount = await User.countDocuments();
    console.log(`👥 Current users: ${userCount}`);
    
    // Clear and recreate admin user
    console.log('🗑️ Clearing existing users...');
    await User.deleteMany();
    
    console.log('👤 Creating admin user...');
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('password123', salt);

    const admin = new User({
      name: 'Admin',
      email: 'admin@example.com',
      password: hashedPassword,
    });

    await admin.save();
    console.log('✅ Admin user created');
    
    // Clear existing articles and create new ones
    console.log('🗑️ Clearing existing articles...');
    await Article.deleteMany({});
    
    console.log('📝 Creating sample articles...');
    const sampleArticles = [
      {
        title: 'Como Desenvolver Inteligência Emocional',
        slug: 'como-desenvolver-inteligencia-emocional',
        content: '<h2>Introdução</h2><p>A inteligência emocional é fundamental para o sucesso profissional. Neste artigo, você vai aprender técnicas práticas para desenvolver essa habilidade essencial.</p><h3>1. Autoconhecimento</h3><p>O primeiro passo é desenvolver a consciência sobre suas próprias emoções e reações.</p><h3>2. Autorregulação</h3><p>Aprenda a controlar suas emoções em situações desafiadoras.</p><h3>3. Empatia</h3><p>Desenvolva a capacidade de compreender as emoções dos outros.</p>',
        excerpt: 'Aprenda técnicas práticas para desenvolver inteligência emocional e acelerar sua carreira profissional.',
        category: 'Desenvolvimento Pessoal',
        status: 'published',
        isFeatured: true,
        publishedAt: new Date(),
        author: admin._id
      },
      {
        title: '5 Soft Skills Essenciais para Líderes',
        slug: '5-soft-skills-essenciais-lideres',
        content: '<h2>As Soft Skills que Fazem a Diferença</h2><p>Descubra as 5 soft skills mais importantes que todo líder deve dominar para ser mais eficaz.</p><h3>1. Comunicação Eficaz</h3><p>A base de toda liderança é a capacidade de comunicar ideias claramente.</p><h3>2. Inteligência Emocional</h3><p>Controlar suas emoções e compreender as dos outros.</p><h3>3. Pensamento Crítico</h3><p>Analisar situações e tomar decisões baseadas em dados.</p><h3>4. Adaptabilidade</h3><p>Flexibilidade para se ajustar a mudanças rapidamente.</p><h3>5. Resolução de Conflitos</h3><p>Mediar e resolver disputas de forma construtiva.</p>',
        excerpt: 'As 5 soft skills que diferenciam grandes líderes dos demais profissionais.',
        category: 'Liderança',
        status: 'published',
        isFeatured: true,
        publishedAt: new Date(),
        author: admin._id
      },
      {
        title: 'Mentalidade de Crescimento: O Segredo do Sucesso',
        slug: 'mentalidade-crescimento-segredo-sucesso',
        content: '<h2>O Poder da Mentalidade de Crescimento</h2><p>Como desenvolver uma mentalidade que acelera o aprendizado e o desenvolvimento profissional.</p><h3>Fixed vs Growth Mindset</h3><p>Entenda a diferença entre mentalidade fixa e de crescimento.</p><h3>Estratégias Práticas</h3><p>Técnicas para cultivar uma mentalidade de crescimento no dia a dia.</p>',
        excerpt: 'Descubra como desenvolver uma mentalidade que acelera o aprendizado e o crescimento profissional.',
        category: 'Mindset',
        status: 'published',
        isFeatured: false,
        publishedAt: new Date(),
        author: admin._id
      }
    ];
    
    for (const articleData of sampleArticles) {
      const article = new Article(articleData);
      await article.save();
      console.log('✅ Created article:', article.title);
    }
    
    console.log('🎉 Seeding completed successfully!');
    
    // Verify articles were created
    const finalCount = await Article.countDocuments();
    console.log(`📊 Final article count: ${finalCount}`);
    
    const publishedCount = await Article.countDocuments({ status: 'published' });
    console.log(`📰 Published articles: ${publishedCount}`);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
};

seedData();
