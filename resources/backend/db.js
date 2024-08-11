const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.PGUSER || 'postgres',
  host: 'localhost',  // Adjust if different
  database: process.env.PGDATABASE || 'postgres',
  password: process.env.PGPASSWORD|| 'password',
  port: 5432,
});

module.exports = pool;

