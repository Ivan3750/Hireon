const mysql = require('mysql2/promise');
require('dotenv').config();
const db = mysql.createPool({
  host: 'hireon-upgrademotiv-e1f3.b.aivencloud.com',
  user: 'avnadmin',
  port: '19495',
  password: process.env.DB_PASSWORD,
  database: 'defaultdb',
});

module.exports = db;
