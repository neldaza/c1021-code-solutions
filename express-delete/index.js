
const express = require('express');
const app = express();

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

app.get('/api/grades', function (req, res) {
  const array = [];
  for (const property in grades) {
    array.push(grades[property]);
  }
  res.json(array);
});

app.delete('/api/grades/:id', function (req, res) {
  const id = Number(req.params.id);
  if (!grades[id]) {
    res.sendStatus(404);
  } else {
    delete grades[id];
    res.sendStatus(204);
  }
});

app.listen(3000, () => {

});

// http -v get :3000/api/grades
// http -v delete :3000/api/grades/273
