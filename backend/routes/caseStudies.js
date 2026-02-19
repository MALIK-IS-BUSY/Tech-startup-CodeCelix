const express = require('express');
const router = express.Router();
const CaseStudy = require('../models/CaseStudy');

const seedData = [
  {
    title: 'AI-Powered Customer Support Automation',
    client: 'RetailPro Inc.',
    industry: 'E-Commerce',
    challenge: 'RetailPro handled 50,000+ monthly support tickets with high operational costs and 24hr response times.',
    solution: 'Deployed an AI chatbot with NLP trained on their product catalog and policies, integrated with their CRM.',
    results: [
      { metric: 'Ticket Reduction', value: '73%' },
      { metric: 'Response Time', value: '< 2 min' },
      { metric: 'Cost Savings', value: '$240K/yr' }
    ],
    tags: ['AI Chatbot', 'NLP', 'CRM Integration'],
    featured: true
  },
  {
    title: 'Predictive Analytics for Supply Chain',
    client: 'LogiFlow Ltd.',
    industry: 'Logistics',
    challenge: 'Frequent stockouts and overstock situations causing millions in losses annually.',
    solution: 'Built ML models analyzing historical data, seasonality, and market trends to predict demand accurately.',
    results: [
      { metric: 'Forecast Accuracy', value: '94%' },
      { metric: 'Stock Reduction', value: '31%' },
      { metric: 'Revenue Increase', value: '18%' }
    ],
    tags: ['Machine Learning', 'Data Analytics', 'Supply Chain'],
    featured: true
  },
  {
    title: 'Automated Document Processing',
    client: 'LegalEase Firm',
    industry: 'Legal',
    challenge: 'Lawyers spent 60% of time on manual document review and data extraction.',
    solution: 'OCR + AI pipeline to extract, classify, and summarize legal documents automatically.',
    results: [
      { metric: 'Processing Speed', value: '10x faster' },
      { metric: 'Accuracy', value: '98.5%' },
      { metric: 'Billable Hours Saved', value: '1,200/mo' }
    ],
    tags: ['OCR', 'Document AI', 'Process Automation'],
    featured: false
  }
];

// GET /api/case-studies
router.get('/', async (req, res) => {
  try {
    let studies = await CaseStudy.find().sort({ createdAt: -1 });
    if (studies.length === 0) {
      studies = await CaseStudy.insertMany(seedData);
    }
    res.json({ success: true, data: studies });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error', error: err.message });
  }
});

// GET /api/case-studies/:id
router.get('/:id', async (req, res) => {
  try {
    const study = await CaseStudy.findById(req.params.id);
    if (!study) return res.status(404).json({ success: false, message: 'Case study not found' });
    res.json({ success: true, data: study });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
