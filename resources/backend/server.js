// server.js

const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 8432;

// Middleware
app.use(bodyParser.json());

// Database configuration
const pool = new Pool({
  user: 'your_username',
  host: 'your_host',
  database: 'your_database',
  password: 'your_password',
  port: 5432, // Default PostgreSQL port
});

// Routes
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  
  try {
    // Insert user into the database
    const result = await pool.query('INSERT INTO login_users (name, email, password) VALUES ($1, $2, $3)', [name, email, password]);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  try {
    // Check if user exists in the database
    const result = await pool.query('SELECT * FROM login_users WHERE email = $1 AND password = $2', [email, password]);
    if (result.rows.length === 0) {
      res.status(401).json({ message: 'Invalid credentials' });
    } else {
      res.status(200).json({ message: 'Login successful' });
    }
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});