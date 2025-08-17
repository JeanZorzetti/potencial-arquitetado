const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

const publicRoutes = require('./routes/publicRoutes');
const adminRoutes = require('./routes/adminRoutes');

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api', publicRoutes);
app.use('/api', adminRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});