const express = require('express');
const app = express();

// Set our postgres environement
const { Pool } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'postgres',
  database: 'postgres_db',
  password: 'password',
  port: 5432,
})

//Index Route
app.get('/', async(req, res) => {
  const { rows } = await pool.query('select * from users')
  res.send(rows)
});

const port = 3000;

app.listen(port, () => {
    console.log(`server started on port ${port}`);
}); 