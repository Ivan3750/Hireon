const db = require("../db");
const express = require("express");
const router = express.Router();
router.get("/search", async (req, res) => {
  try {
    const dbres = db.query(
      `select * from defaultdb.jobs where job_title like '%${req.query.what}%' and city like '%${req.query.where}%' limit 10`
    );
    dbres.then(res2 => res.status(200).json(res2[0]));
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ error: "Server error" });
  }
});
module.exports = router;
