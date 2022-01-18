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
app.get('/bug', async (req, res) => {
  try {
    const allProjects = await pool.query('SELECT * FROM bug');
    res.json(allProjects.rows);
  } catch (err) {
    console.error(err.message);
  }
});
app.post('/bug', async (req, res) => {
  try {
    // test the post with thunder and this line of code  res.json(req.body)
    const {
      subject,
      description,
      status,
      category,
      priority,
      assignee,
      createddate,
      startdate,
      duedate,
    } = req.body;
    const newBug = await pool.query(
      'INSERT INTO bug(subject, description, status, category, priority, assignee, createddate, startdate, duedate) VALUES' +
        '($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *',
      [
        subject,
        description,
        status,
        category,
        priority,
        assignee,
        createddate,
        startdate,
        duedate,
      ]
    );

    res.json(newBug.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
app.get('/time', async (req, res) => {
  try {
    const allTimes = await pool.query('SELECT * FROM time');
    res.json(allTimes.rows);
  } catch (err) {
    console.error(err.message);
  }
});
app.post('/time', async (req, res) => {
  try {
    // test the post with thunder and this line of code  res.json(req.body)
    const { bugname, startdate, starttime, enddate, endtime } = req.body;
    const newTime = await pool.query(
      'INSERT INTO time(bugname, startdate, starttime, enddate, endtime) VALUES' +
        '($1,$2,$3,$4,$5) RETURNING *',
      [bugname, startdate, starttime, enddate, endtime]
    );

    res.json(newTime.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const allAccounts = await pool.query(
      'SELECT * FROM account WHERE username= $1 AND password= $2',
      [username, password],
      (err, results) => {
        if (err) {
          console.log(err);
        }
        if (results.rows.length > 0) {
          //more than one user prevent user from useing that name.
          const t = true;
          res.send(t);

          console.log('user found', { status: 'ok' });
        }
        if (results.rows.length === 0) {
          // console.log('user Not found');
          // console.log('user/password not found', { status: 'error' });
          const n = false;
          res.send(n);
        }
      }
    );
    // res.json({ status: 'ok' });
    // res.send(allAccounts.rows);
  } catch (err) {
    console.error(err.message);
    // console.log('user/password not found', { status: 'error' });
  }
});
app.post('/account', async (req, res) => {
  try {
    // test the post with thunder and this line of code  res.json(req.body)
    const { username, password, email, fname, lname, privilege, org } =
      req.body;
    const newAccount = await pool.query(
      'INSERT INTO account(username, password, email,fname, lname, privilege, org) VALUES' +
        '($1,$2,$3,$4,$5,$6,$7) RETURNING *',
      [username, password, email, fname, lname, privilege, org]
    );

    res.json(newAccount.rows[0]);
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
