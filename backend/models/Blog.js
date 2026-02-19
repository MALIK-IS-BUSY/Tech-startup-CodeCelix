const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, default: 'TechStart Team' },
  category: { type: String, required: true },
  tags: [String],
  image: { type: String, default: '' },
  published: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Blog', blogSchema);
