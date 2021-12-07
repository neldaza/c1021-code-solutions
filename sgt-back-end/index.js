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
  const grade = req.body;
  const gradeScore = req.body.score;
  if (!grade || isNaN(gradeScore) || gradeScore > 100) {
    const errorObject =
    {
      error: 'content is a required field'
    };
    res.status(400);
    res.send(errorObject);
  } else {
    const name = req.body.name;
    const course = req.body.course;
    const score = req.body.score;
    const post = [name, course, score];
    const sql = `
  insert into "grades" ("name", "course", "score")
  values ($1, $2, $3)
 `;
    db.query(sql, post)
      .then(result => {
        res.status(201);
        res.send(req.body);
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
// http post localhost:3000/api/grades name="John Smith" course="Biology" score=97
