const express = require('express');
const app = express();
const data = require('./data.json');
// require automatically parses

app.get('/api/notes', function (req, res) {
  const array = [];
  for (const property in data.notes) {
    array.push(data.notes[property]);
  }
  res.status(200);
  res.send(array);
});

app.listen(3000, () => {

});
