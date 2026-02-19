const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

const seedData = [
  {
    title: 'The Future of AI in Business Automation',
    slug: 'future-of-ai-business-automation',
    excerpt: 'How AI is reshaping business operations and why startups should adopt it now.',
    content: 'Artificial Intelligence is no longer a futuristic concept—it is the present reality transforming how businesses operate across every sector. From automating repetitive tasks to generating actionable insights from vast datasets, AI solutions are enabling organizations to do more with less...',
    author: 'TechStart Team',
    category: 'AI Trends',
    tags: ['AI', 'Automation', 'Business'],
    published: true
  },
  {
    title: 'Machine Learning vs. Traditional Analytics: What You Need to Know',
    slug: 'ml-vs-traditional-analytics',
    excerpt: 'Breaking down when to use ML models versus traditional business intelligence tools.',
    content: 'When businesses first consider modernizing their data strategies, one of the most common questions is whether to invest in machine learning or stick with proven traditional analytics. The answer depends largely on the complexity of your data, the nature of your goals, and your team\'s capacity...',
    author: 'TechStart Team',
    category: 'Data Science',
    tags: ['Machine Learning', 'Analytics', 'Data'],
    published: true
  },
  {
    title: '5 Signs Your Business is Ready for AI Automation',
    slug: '5-signs-business-ready-ai-automation',
    excerpt: 'Not every company needs AI right now. Here is how to know if yours does.',
    content: 'Implementing AI is a significant investment in time, resources, and organizational change. Before embarking on this journey, it is essential to assess whether your business is genuinely ready for AI automation or whether simpler digital transformation steps should come first...',
    author: 'TechStart Team',
    category: 'Strategy',
    tags: ['AI', 'Strategy', 'Digital Transformation'],
    published: true
  },
  {
    title: 'How NLP is Revolutionizing Customer Service',
    slug: 'nlp-revolutionizing-customer-service',
    excerpt: 'Natural Language Processing makes AI chatbots smarter than ever before.',
    content: 'Customer expectations have never been higher. They want instant, accurate, and personalized responses—24 hours a day, 7 days a week. Natural Language Processing (NLP) is the technology making this a reality for businesses of all sizes...',
    author: 'TechStart Team',
    category: 'Technology',
    tags: ['NLP', 'Customer Service', 'Chatbots'],
    published: true
  }
];

// GET /api/blog
router.get('/', async (req, res) => {
  try {
    let posts = await Blog.find({ published: true }).sort({ createdAt: -1 });
    if (posts.length === 0) {
      posts = await Blog.insertMany(seedData);
    }
    res.json({ success: true, data: posts });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error', error: err.message });
  }
});

// GET /api/blog/:slug
router.get('/:slug', async (req, res) => {
  try {
    const post = await Blog.findOne({ slug: req.params.slug, published: true });
    if (!post) return res.status(404).json({ success: false, message: 'Post not found' });
    res.json({ success: true, data: post });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
