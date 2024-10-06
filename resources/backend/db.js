// const { Pool } = require('pg');
const mysql = require('mysql2/promise');

// const pool = new Pool({
//   user: process.env.PGUSER || 'postgres',
//   host: 'localhost',  // Adjust if different
//   database: process.env.PGDATABASE || 'postgres',
//   password: process.env.PGPASSWORD|| 'password',
//   port: 5432,
// });

const pool = mysql.createPool({
  user: process.env.MYSQL_USER || 'root',
  host: process.env.MYSQL_HOST || 'localhost',
  database: process.env.MYSQL_DATABASE || 'kalepa',
  password: process.env.MYSQL_PASSWORD || '12345678',
  port: process.env.MYSQL_PORT || 3306
});

module.exports = pool;
