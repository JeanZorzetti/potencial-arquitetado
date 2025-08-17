const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const User = require('./models/User');
const connectDB = require('./config/db');

dotenv.config();

const initializeDatabase = async () => {
  try {
    await connectDB();
    console.log('🔄 Checking database initialization...');

    // Check if admin user exists
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
      console.log('📧 Email: admin@example.com');
      console.log('🔑 Password: password123');
    } else {
      console.log('✅ Admin user already exists');
    }

    console.log('🎉 Database initialization complete!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Database initialization failed:', error);
    process.exit(1);
  }
};

initializeDatabase();