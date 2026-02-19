require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173', credentials: true }));
app.use(express.json());

// Routes
app.use('/api/contact', require('./routes/contact'));
app.use('/api/newsletter', require('./routes/newsletter'));
app.use('/api/inquiry', require('./routes/inquiry'));
app.use('/api/case-studies', require('./routes/caseStudies'));
app.use('/api/blog', require('./routes/blog'));

// Health check
app.get('/api/health', (req, res) => res.json({ status: 'OK', message: 'TechStart API running' }));

// Connect to MongoDB and start server
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
    // Start server even without DB for development
    app.listen(PORT, () => console.log(`Server running on port ${PORT} (DB disconnected)`));
  });
