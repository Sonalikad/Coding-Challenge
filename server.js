const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: 'your_username',
  host: 'localhost',
  database: 'store_ratings',
  password: 'data',
  port: 5432,
});

// API routes (login, signup, add store, etc.) go here

app.listen(5000, () => console.log('Server running on port 5000'));