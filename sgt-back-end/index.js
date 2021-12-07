const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});
const express = require('express');
const app = express();
const JSONMiddleware = express.json();
app.use(JSONMiddleware);

app.get('/api/grades', (req, res) => {
  const array = [];
  const sql = `
  select *
  from  "grades"
  `;

  db.query(sql)
    .then(result => {
      const allGrades = result.rows[0];
      if (!allGrades) {
        res.status(200);
        res.send(array);
      } else {
        array.push(allGrades);
        res.send(array);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades', (req, res) => {
  const array = [];
  array.push(req.body.content);
  var JSONObject = array[0];
  if (!JSONObject || !JSONObject.name || !JSONObject.course || !JSONObject.score ||
    isNaN(JSONObject.score) || JSONObject.score <= 100) {
    const errorObject =
    {
      error: 'content is a required field'
    };
    res.status(400);
    res.send(errorObject);

  } else {
    const reqBody = req.body.content;
    const sql = `
 insert into "grades" ("name", "course", "score")
 `;
    const values = [reqBody];

    db.query(sql, values)
      .then(result => {
        res.status(201);
        res.send(result.rows[0]);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error occurred.'
        });
      });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('The server is listening on port 3000!');
});

// http get localhost:3000/api/grades
// http post localhost:3000/api/grades
