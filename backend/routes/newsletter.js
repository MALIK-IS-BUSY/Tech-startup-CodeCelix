const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Newsletter = require('../models/Newsletter');

// POST /api/newsletter
router.post(
  '/',
  [body('email').isEmail().withMessage('Valid email is required')],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ success: false, errors: errors.array() });

    try {
      const existing = await Newsletter.findOne({ email: req.body.email });
      if (existing) return res.status(409).json({ success: false, message: 'Email already subscribed!' });

      await Newsletter.create({ email: req.body.email });
      res.status(201).json({ success: true, message: 'Subscribed successfully!' });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Server error', error: err.message });
    }
  }
);

module.exports = router;
