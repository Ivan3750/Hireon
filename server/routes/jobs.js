const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db');
const router = express.Router();

router.get("/jobs", async (req, res) => {
    try {
        const { title, city, employment, area, salary, experience } = req.query;

        let query = `SELECT id, job_title, city, about, salary FROM jobs WHERE 1=1`;
        let params = [];

        if (title) {
            query += ` AND job_title LIKE ?`;
            params.push(`%${title}%`);
        }
        if (city) {
            query += ` AND city LIKE ?`;
            params.push(`%${city}%`);
        }
        if (employment) {
            query += ` AND employment_type LIKE ?`;
            params.push(`%${employment}%`);
        }
        if (area) {
            query += ` AND professional_area LIKE ?`;
            params.push(`%${area}%`);
        }
        if (salary) {
            query += ` AND salary >= ?`;
            params.push(Number(salary));
        }
        if (experience) {
            query += ` AND experience <= ?`;
            params.push(Number(experience));
        }

        const [results] = await db.execute(query, params);
        res.json(results);
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ error: "Server error" });
    }
});


router.get("/myvacancy", async (req, res) => {
    try {

        let query = `SELECT id, job_title, address, contact, city, about, salary FROM jobs WHERE id=?`;
        let params = [9];

        const [results] = await db.execute(query, params);
        res.json(results);
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ error: "Server error" });
    }
});
router.get("/job", async (req, res) => {
    try {
        const { id } = req.query;

        
        if (!id) {
            return res.status(400).json({ error: "Job ID is required" });
        }

        
        let query = `SELECT id, job_title, city, about, address, email, contact  salary FROM jobs WHERE id = ?`;
        let params = [id];

        const [results] = await db.execute(query, params);

        if (results.length === 0) {
            return res.status(404).json({ error: "Job not found" });
        }

        res.json(results[0]);
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ error: "Server error" });
    }
});




router.post('/new/job', async (req, res) => {
    const { job_title, salary, address, contact, email, about } = req.body;
    
    if (!job_title || !salary || !address || !contact || !email) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const query = `
          INSERT INTO jobs (job_title, salary, address, contact, email, about) 
          VALUES (?, ?, ?, ?, ?, ?);
        `;
        const [result] = await db.execute(query, [job_title, salary, address, contact, email, about]);
        res.status(201).json({ id: result.insertId, message: 'User created successfully' });
    } catch (err) {
        console.error('Database error:', err);
        res.status(500).json({ error: 'Server error' });
    }
});


router.put('/job', async (req, res) => {
    const userId = req.params.userId;
    const { job_title, salary, address, contact, email, about } = req.body;

    if (!userId || isNaN(userId)) {
        return res.status(400).json({ error: 'Invalid User ID' });
    }

    try {
        const query = `
          UPDATE jobs SET job_title = ?, salary = ?, address = ?, contact = ?, email = ?, about = ?
          WHERE id = ?;
        `;
        const [result] = await db.execute(query, [job_title, salary, address, contact, email, about, userId]);
        
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json({ message: 'User updated successfully' });
    } catch (err) {
        console.error('Database error:', err);
        res.status(500).json({ error: 'Server error' });
    }
});



module.exports = router;
