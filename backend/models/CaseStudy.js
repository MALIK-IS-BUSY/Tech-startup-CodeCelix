const mongoose = require('mongoose');

const caseStudySchema = new mongoose.Schema({
  title: { type: String, required: true },
  client: { type: String, required: true },
  industry: { type: String, required: true },
  challenge: { type: String, required: true },
  solution: { type: String, required: true },
  results: [{ metric: String, value: String }],
  tags: [String],
  image: { type: String, default: '' },
  featured: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CaseStudy', caseStudySchema);
