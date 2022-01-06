const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
const PORT = process.env.PORT || 5000;
const path = require('path');

require('dotenv').config();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'dist')));

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));
}
app.get('/project', async (req, res) => {
  try {
    const allProjects = await pool.query('SELECT * FROM project');
    res.json(allProjects.rows);
  } catch (err) {
    console.error(err.message);
  }
});
app.post('/project', async (req, res) => {
  try {
    // test the post with thunder and this line of code  res.json(req.body)
    const { name } = req.body;
    const newProject = await pool.query(
      'INSERT INTO project(name) VALUES' + '($1) RETURNING *',
      [name]
    );

    res.json(newProject.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});
