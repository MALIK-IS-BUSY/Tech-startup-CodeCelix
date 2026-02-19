const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  company: { type: String, trim: true },
  service: {
    type: String,
    enum: ['AI Automation', 'Machine Learning', 'Data Analytics', 'Process Automation', 'Custom AI', 'Consulting'],
    required: true
  },
  budget: { type: String },
  timeline: { type: String },
  description: { type: String, required: true },
  status: { type: String, enum: ['pending', 'contacted', 'in-progress', 'closed'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Inquiry', inquirySchema);
