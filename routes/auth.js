const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Assuming User schema is already created
const router = express.Router();

// POST /api/auth/login
router.post('/login', async (req, res) => {
  const { usn } = req.body;

  if (!usn) {
    return res.status(400).json({ message: 'USN is required' });
  }

  try {
    // Check if the user exists in the database
    const user = await User.findOne({ usn });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { usn: user.usn, name: user.name, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: '1h' }
    );

    return res.status(200).json({ token });
  } catch (error) {
    console.error('Error during login:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;