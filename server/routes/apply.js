const jwt = require("jsonwebtoken");
const db = require("../db");
const express = require("express");
require("dotenv").config();
const router = express.Router();
const JWT_SECRET = process.env.JWT_TOKEN;

const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token)
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token." });
    req.user = user;
    next();
  });
};

router.post("/apply", authenticateToken, async (req, res) => {
  const { jobId } = req.body;

  if (!jobId) {
    return res.status(400).json({ message: "Job ID is required" });
  }

  try {
    const jobResult = await db.query("SELECT id FROM jobs WHERE id = ?", [
      jobId,
    ]);
    if (jobResult.length === 0) {
      return res.status(404).json({ message: "Job not found" });
    }

    const userResult = await db.query(
      "SELECT id, applied_jobs FROM users WHERE id = ?",
      [req.user.id]
    );
    if (userResult.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = userResult[0];
    let appliedJobs = user.applied_jobs ? JSON.parse(user.applied_jobs) : [];

    if (appliedJobs.includes(jobId)) {
      return res
        .status(400)
        .json({ message: "You have already applied for this job" });
    }

    appliedJobs.push(jobId);

    await db.query("UPDATE users SET applied_jobs = ? WHERE id = ?", [
      JSON.stringify(appliedJobs),
      req.user.id,
    ]);

    res.status(200).json({ message: "Application submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});
router.get("/check-application", authenticateToken, async (req, res) => {
  const { jobId } = req.query;

  if (!jobId) {
    return res.status(400).json({ message: "Job ID is required" });
  }

  try {
    const userResult = await db.query(
      "SELECT applied_jobs FROM users WHERE id = ?",
      [req.user.id]
    );
    
    if (userResult.length === 0 || userResult[0].length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = userResult[0][0]; 
    const appliedJobs = user.applied_jobs || [];  

    const hasApplied = appliedJobs.includes(jobId);  

    res.json({ hasApplied });
  } catch (error) {
    console.error("Error checking application:", error);
    return res.status(500).json({ message: "Server error" });
  }
});



module.exports = router;
