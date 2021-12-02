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

app.get('/api/notes/:id', function (req, res) {
  const reqId = Number(req.params.id);
  if (isNaN(reqId)) {
    const errorObject = {
      error: 'id must be a positive integer'
    };
    res.send(errorObject);
    res.sendStatus(400);
    return;
  }
  const array = [];
  for (const property in data.notes) {
    if (data.notes[property].id === reqId) {

      array.push(data.notes[property]);

    } else {
      const cannotFindObject = {
        error: `cannot find note with id ${reqId}`
      };
      res.send(cannotFindObject);
      res.sendStatus(404);

      return;
    }

    res.send(array[0]);

  }

});

app.listen(3000, () => {
// eslint-disable-next-line no-console
  console.log('The server is listening on port 3000!');
});
