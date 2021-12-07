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

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  const grade = req.body;
  const gradeScore = req.body.score;
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
  } else if (!grade || isNaN(gradeScore) || gradeScore > 100) {
    const errorObject =
    {
      error: 'content is a required field'
    };
    res.status(400);
    res.send(errorObject);
  } else {
    const sql = `
    update "grades"
       set "name" = $2,
           "course" = $3,
           "score" = $4
     where "gradeId" = $1
     returning *
  `;
    const name = req.body.name;
    const course = req.body.course;
    const score = req.body.score;
    const put = [gradeId, name, course, score];
    db.query(sql, put)
      .then(result => {
        const gradeUpdateResult = result.rows[0];
        if (!gradeUpdateResult) {
          res.status(404).json({
            error: `Cannot find grade with gradeId ${gradeId}`
          });
        }
        res.status(200);
        res.send(gradeUpdateResult);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error occurred.'
        });
      });

  }
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
  } else {
    const sql = `
    delete from "grades"
    where "gradeId" = $1
    returning *;
    `;
    const deleteId = [gradeId];
    db.query(sql, deleteId)
      .then(result => {
        const gradeDeletedResult = result.rows[0];
        if (!gradeDeletedResult) {
          res.status(404).json({
            error: `Cannot find grade with gradeId ${gradeId}`
          });
        } else {
          res.sendStatus(204);
        }
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
// http put localhost:3000/api/grades/1 name="Rick Sanchez" course="Rick and Morty" score=99
// http delete localhost:3000/api/grades/1
