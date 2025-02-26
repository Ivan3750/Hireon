const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db');
const { token } = require('morgan');
const { stat } = require('original-fs');
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

router.get('/user/data', authenticateToken, async (req, res) => {
    const userId = req.user.id; // Отримуємо ID користувача з токена
    console.log(userId)
    if (!userId) {
        return res.status(400).send('User ID is required', userId);
    }

    if (isNaN(userId)) {
        return res.status(400).send('Invalid User ID format');
    }

    try {
        const query = `
          SELECT users.id AS user_id, users.email, users.phone, users.age, users.city, users.country, users.salary, users.job, users.additionalInfo, users.created_at, users.full_name, users.aboutme, users.statistics, users.skills,
                 education.id AS education_id, education.education_level, education.high_school, education.education_place, 
                 education.started, education.ended, education.more_info,
                 languages.id AS language_id, languages.language_name, languages.proficiency_level,
                 skills.id AS skill_id, skills.skill_name
          FROM users
          LEFT JOIN education ON users.id = education.user_id
          LEFT JOIN languages ON users.id = languages.user_id
          LEFT JOIN skills ON users.id = skills.user_id
          WHERE users.id = ?;
        `;

        const [results] = await db.execute(query, [userId]);

        if (results.length === 0) {
            return res.status(404).send('User not found');
        }

        const user = {
            id: results[0].user_id,
            email: results[0].email,
            phone: results[0].phone,
            age: results[0].age,
            city: results[0].city,
            country: results[0].country,
            created_at: results[0].created_at,
            full_name: results[0].full_name,
            job: results[0].job,
            additionalInfo: results[0].additionalInfo,
            salary: results[0].salary,
            statistics: results[0].statistics,
            aboutme: results[0].aboutme,
            skills: results[0].skills
        };

        const education = {
            id: results[0].education_id,
            education_level: results[0].education_level,
            high_school: results[0].high_school,
            education_place: results[0].education_place,
            started: results[0].started,
            ended: results[0].ended,
            more_info: results[0].more_info,
        };

        const languages = results.map(row => ({
            id: row.language_id,
            language_name: row.language_name,
            proficiency_level: row.proficiency_level,
        }));

        const skills = results.map(row => ({
            id: row.skill_id,
            skill_name: row.skill_name,
        }));

        res.status(200).json({user: user, education: education, languages: languages, skills: skills});
    } catch (err) {
        console.error('Error executing query: ', err);
        res.status(500).send('Server error');
    }
});
router.get('/user/language', authenticateToken, async (req, res) => {
    const userId = req.user.id; 
    
    if (!userId || isNaN(userId)) {
        return res.status(400).send('Invalid User ID');
    }

    try {
        const query = `
          SELECT id AS language_id, language_name, proficiency_level
          FROM languages
          WHERE user_id = ?;
        `;

        const [results] = await db.execute(query, [userId]);

        if (!results.length) {
            return res.status(404).send('No languages found');
        }

        const languages = results.map(row => ({
            id: row.language_id,
            language_name: row.language_name,
            proficiency_level: row.proficiency_level,
        }));

        res.json({ languages });
    } catch (err) {
        console.error('Error executing query: ', err);
        res.status(500).send('Server error');
    }
});
router.put('/user/data', authenticateToken, async (req, res) => {
    const userId = req.user.id; 
    console.log(req)
    const { email, job, city, salary, phone, additionalInfo} = req.body.user;

    if (!userId) {
        return res.status(400).send('User ID is required');
    }

    if (isNaN(userId)) {
        return res.status(400).send('Invalid User ID format');
    }

    try {
        console.log(email, job, city, salary, phone, additionalInfo)
        const updateUserQuery = `
            UPDATE users
            SET email = ?, phone = ?, job = ?, city = ?, salary = ?, additionalInfo = ?
            WHERE id = ?;
        `;

        const [userUpdateResult] = await db.execute(updateUserQuery, [email, phone, job, city, salary, additionalInfo, userId]);

        if (userUpdateResult.affectedRows === 0) {
            return res.status(404).send('User not found');
        }
        res.send('User CV updated successfully');
    } catch (err) {
        console.error('Error executing query: ', err);
        res.status(500).send('Server error');
    }
});
router.put('/user/skill',authenticateToken, async (req, res) => {
    const userId = req.user.id; 
    const { skill_name } = req.body;

    if (!userId || !skill_name) {
        return res.status(400).send('User ID and skill name are required');
    }

    try {
        const query = `SELECT id FROM skills WHERE user_id = ? AND skill_name = ?`;
        const [existingSkill] = await db.execute(query, [userId, skill_name]);

        if (existingSkill.length > 0) {
            const updateQuery = `
                UPDATE skills 
                SET skill_name = ?
                WHERE user_id = ? AND skill_name = ?;
            `;
            await db.execute(updateQuery, [skill_name, userId, skill_name]);
            res.send('Skill updated successfully');
        } else {
            const insertQuery = `
                INSERT INTO skills (user_id, skill_name)
                VALUES (?, ?);
            `;
            await db.execute(insertQuery, [userId, skill_name]);
            res.send('Skill added successfully');
        }
    } catch (err) {
        console.error('Error updating skill: ', err);
        res.status(500).send('Server error');
    }
});
router.post('/user/language',authenticateToken, async (req, res) => {
    const userId = req.user.id; 
    const { language_name, proficiency_level } = req.body;

    if (!userId) {
        return res.status(400).send('User ID is required');
    }

    try {
        const query = `
            INSERT INTO languages (user_id, language_name, proficiency_level)
            VALUES (?, ?, ?);
        `;
        await db.execute(query, [userId, language_name, proficiency_level]);
        res.send('Language added successfully');
    } catch (err) {
        console.error('Error adding language: ', err);
        res.status(500).send('Server error');
    }
});
router.delete('/user/language/',authenticateToken, async (req, res) => {
    const userId = req.user.id; 
    const { language_name } = req.body;

    if (!userId || !language_name) {
        return res.status(400).send('User ID and Language ID are required');
    }

    try {
        const query = `
            DELETE FROM languages
            WHERE user_id = ? AND language_name = ?;
        `;
        await db.execute(query, [userId, language_name]);
        res.send('Language deleted successfully');
    } catch (err) {
        console.error('Error deleting language: ', err);
        res.status(500).send('Server error');
    }
});
router.put('/user/profile',authenticateToken, async (req, res) => {
    const userId = req.user.id; 
    const { email, phone, age, city, country, full_name } = req.body;

    if (!userId) {
        return res.status(400).send('User ID is required');
    }

    try {
        const query = `
            UPDATE users 
            SET email = ?, phone = ?, age = ?, city = ?, country = ?, full_name = ?
            WHERE id = ?;
        `;
        await db.execute(query, [email, phone, age, city, country, full_name, userId]);
        res.send('User profile updated successfully');
    } catch (err) {
        console.error('Error updating user profile: ', err);
        res.status(500).send('Server error');
    }
});
router.put('/user/education', authenticateToken ,async (req, res) => {
    const userId = req.user.id;
    const { education_level, education_place, started, ended, more_info } = req.body;
    console.log(req)
    if (!userId) {
        return res.status(400).send('User ID is required');
    }

    try {
        const query = `SELECT id FROM education WHERE user_id = ?`;
        const [existingEducation] = await db.execute(query, [userId]);

        if (existingEducation.length > 0) {
            const updateQuery = `
                UPDATE education 
                SET education_level = ?, education_place = ?, started = ?, ended = ?, more_info = ?
                WHERE user_id = ?;
            `;
            await db.execute(updateQuery, [education_level, education_place, started, ended, more_info, userId]);
            res.send('Education updated successfully');
        } else {
            const insertQuery = `
                INSERT INTO education (user_id, education_level,  education_place, started, ended, more_info)
                VALUES (?, ?, ?, ?, ?, ?, ?);
            `;
            await db.execute(insertQuery, [userId, education_level, education_place, started, ended, more_info]);
            res.send('Education added successfully');
        }
    } catch (err) {
        console.error('Error updating education: ', err);
        res.status(500).send('Server error');
    }
});
module.exports = router;
