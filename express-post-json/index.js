const express = require('express');
let nextId = 1;
const grades = {};
const app = express();

const JSONMiddleware = express.json();
app.use(JSONMiddleware);

app.get('/api/grades', function (req, res) {
  const array = [];
  for (const property in grades) {
    array.push(grades[property]);
  }
  res.json(array);
});

app.post('/api/grades', function (req, res) {
  const newGrade = req.body;
  const id = nextId++;
  newGrade.id = id;
  grades[id] = newGrade;
  res.status(201).json(newGrade);
});

app.listen(3000, () => {

});
// http get localhost:3000/api/grades
// http -v post :3000/api/grades name="Minecraft Steve" course="Super Smash Bros." score=64
