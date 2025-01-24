const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db');

const router = express.Router();
const JWT_SECRET = 'hireon'; 

router.post('/registration', async (req, res) => {
  const { fullName, email, phone, password } = req.body;

  try {
    const [existingUser] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    if (existingUser.length > 0) {
      return res.status(400).json({ message: 'User already exists with this email.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.query(
      'INSERT INTO users (full_name, email, phone, password_hash) VALUES (?, ?, ?, ?)',
      [fullName, email, phone, hashedPassword]
    );
    const token = jwt.sign(
        { email, fullName },
        JWT_SECRET,
        { expiresIn: '1h' }
      );

    res.status(201).json({ message: 'User registered successfully.', token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error.' });
  }
});


router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const [user] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    if (user.length === 0) {
      return res.status(400).json({ message: 'Invalid email or password.' });
    }

    const dbUser = user[0];

    const isPasswordValid = await bcrypt.compare(password, dbUser.password_hash);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid email or password.' });
    }

    const token = jwt.sign(
      { email: dbUser.email, fullName: dbUser.full_name },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({ message: 'Login successful.', token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error.' });
  }
});


router.post('/verify', (req, res) => {
    const { token } = req.body; 
  
    if (!token) {
      return res.status(400).json({ message: 'Token is required' });
    }
  
    try {
      const decoded = jwt.verify(token, JWT_SECRET); 
      res.status(200).json({
        message: 'Token is valid',
        user: decoded, 
      });
    } catch (err) {
      res.status(401).json({ message: 'Invalid or expired token', error: err.message });
    }
  });
module.exports = router;
