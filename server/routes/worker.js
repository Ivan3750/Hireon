const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db');
const router = express.Router();

router.get("/worker", async (req, res) => {
    try {
        const { email, city, country, age, job, salary } = req.query;

        let query = `SELECT id, full_name, age, email, phone, city, country, created_at, job, salary, additionalInfo FROM users WHERE 1=1`;
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


router.get("/worker/:id", async (req, res) => {
    try {
        const { id } = req.params;  

        const query = `SELECT id, full_name, email, phone, city, country, created_at, job, salary, additionalInfo, notifications FROM users WHERE id = ?`;
        
       const [results] = await db.execute(query, [id]);
        if (results.length > 0) {
            res.json(results[0]); 
        } else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ error: "Server error" });
    }
});


module.exports = router;