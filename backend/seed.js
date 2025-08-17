const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const User = require('./models/User');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const seedUser = async () => {
  try {
    await User.deleteMany();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('password123', salt);

    const newUser = new User({
      name: 'Admin',
      email: 'admin@example.com',
      password: hashedPassword,
    });

    await newUser.save();

    console.log('User created');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedUser();
