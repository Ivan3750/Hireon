const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db');
require('dotenv').config();

const router = express.Router();
const JWT_SECRET = process.env.JWT_TOKEN; 

const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token.' });
    req.user = user;
    next();
  });
};

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

    let userId;

    if (userType === 'applicant') {
      const [result] = await db.query(
        'INSERT INTO users (full_name, email, phone, password_hash) VALUES (?, ?, ?, ?)',
        [fullName, email, phone, hashedPassword]
      );
      userId = result.insertId; // отримуємо userId після вставки користувача в таблицю users
    } else if (userType === 'employer') {
      const [result] = await db.query(
        'INSERT INTO companies (company_name, email, phone, password_hash) VALUES (?, ?, ?, ?)',
        [companyName, email, phone, hashedPassword]
      );
      userId = result.insertId; // отримуємо userId після вставки компанії в таблицю companies
    } else {
      return res.status(400).json({ message: 'Invalid user type.' });
    }

    const token = jwt.sign(
      { email, userType, name: userType === 'applicant' ? fullName : companyName, id: userId },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.status(201).json({ message: 'Registration successful.', token }); // повертаємо токен в відповіді
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
      { email: dbUser.email, fullName: dbUser.full_name, id: dbUser.id }, // Додаємо ID в токен
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({ message: 'Login successful.', token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error.' });
  }
});


router.post('/verify', authenticateToken, (req, res) => {
  res.status(200).json({
    message: 'Token is valid',
    user: req.user,
  });
});

module.exports = router;
