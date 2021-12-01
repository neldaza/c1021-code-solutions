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

const express = require('express');
const app = express();

app.get('/api/grades', function (req, res) {
  const array = [];
  for (const property in grades) {
    array.push(grades[property]);
  }
  res.json(array);
});

app.listen(3000, () => {

});
