const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db');

const router = express.Router();
const JWT_SECRET = 'hireon'; 

router.post('/registration', async (req, res) => {
  const { fullName, email, phone, password, userType, companyName } = req.body;

  try {
    const [existingUser] = await db.query(
      `SELECT email FROM users WHERE email = ? 
       UNION 
       SELECT email FROM companies WHERE email = ?`,
      [email, email]
    );
        if (existingUser.length > 0) {
      return res.status(400).json({ message: 'User or company already exists with this email.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    if (userType === 'applicant') {
      await db.query(
        'INSERT INTO users (full_name, email, phone, password_hash) VALUES (?, ?, ?, ?)',
        [fullName, email, phone, hashedPassword]
      );
    } else if (userType === 'employer') {
      await db.query(
        'INSERT INTO companies (company_name, email, phone, password_hash) VALUES (?, ?, ?, ?)',
        [companyName, email, phone, hashedPassword]
      );
    } else {
      return res.status(400).json({ message: 'Invalid user type.' });
    }

    const token = jwt.sign(
      { email, userType, name: userType === 'user' ? fullName : companyName },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(201).json({ message: 'Registration successful.', token });
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



