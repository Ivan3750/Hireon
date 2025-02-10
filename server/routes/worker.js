const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db');
const router = express.Router();

router.get("/worker", async (req, res) => {
    try {
        const { email, city, country, age, job, salary } = req.query;

        let query = `SELECT id, full_name, email, phone, city, country, created_at, job, salary FROM users WHERE 1=1`;
        let params = [];

        if (email) {
            query += ` AND email LIKE ?`;
            params.push(`%${email}%`);
        }
        if (city) {
            query += ` AND city LIKE ?`;
            params.push(`%${city}%`);
        }
        if (country) {
            query += ` AND country LIKE ?`;
            params.push(`%${country}%`);
        }
        if (age) {
            query += ` AND age = ?`;
            params.push(Number(age));
        }
        if (job) {
            query += ` AND job LIKE ?`;
            params.push(`%${job}%`);
        }
        if (salary) {
            query += ` AND salary >= ?`;
            params.push(Number(salary));
        }

        const [results] = await db.execute(query, params);
        res.json(results);
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ error: "Server error" });
    }
});


// API для отримання даних користувача за ID
router.get("/worker/:id", async (req, res) => {
    try {
        const { id } = req.params;  // Отримуємо ID з параметрів запиту

        // Запит до бази даних для отримання інформації про користувача за ID
        const query = `SELECT id, full_name, email, phone, city, country, created_at, job, salary, additionalInfo, notifications FROM users WHERE id = ?`;
        
        // Виконання запиту до бази даних
        const [results] = await db.execute(query, [id]);

        // Якщо користувач знайдений, повертаємо його дані
        if (results.length > 0) {
            res.json(results[0]);  // Повертаємо перший результат (оскільки ID унікальний)
        } else {
            res.status(404).json({ error: "User not found" });  // Якщо користувач не знайдений
        }
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ error: "Server error" });
    }
});


module.exports = router;