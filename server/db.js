const mysql = require('mysql2/promise');
require('dotenv').config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: parseInt(process.env.DB_PORT, 10),
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.getConnection()
  .then((conn) => {
    console.log('Successfully connected to the database');
    conn.release();
  })
  .catch(err => {
    console.error('Database connection failed:', err);
    process.exit(1);
  });

module.exports = db;