const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Inquiry = require('../models/Inquiry');

// POST /api/inquiry
router.post(
  '/',
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('service').notEmpty().withMessage('Service selection is required'),
    body('description').trim().notEmpty().withMessage('Description is required')
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ success: false, errors: errors.array() });

    try {
      const inquiry = await Inquiry.create(req.body);
      res.status(201).json({ success: true, message: 'Inquiry submitted successfully!', data: inquiry });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Server error', error: err.message });
    }
  }
);

// GET /api/inquiry
router.get('/', async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.json({ success: true, data: inquiries });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
