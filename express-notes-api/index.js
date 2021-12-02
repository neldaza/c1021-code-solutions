const express = require('express');
const app = express();
const data = require('./data.json');
const JSONMiddleware = express.json();
app.use(JSONMiddleware);

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
let nextId = data.nextId;

app.post('/api/notes', function (req, res) {
  const reqBody = req.body;
  if (!reqBody.content) {
    const errorObject = {
      error: 'content is a required field'
    };
    res.status(400);
    res.send(errorObject);
  } else if (reqBody.content) {
    reqBody.id = nextId;
    data.notes[nextId] = reqBody;
    nextId++;
    res.status(201);
    res.send(reqBody);
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const reqId = Number(req.params.id);

  if (isNaN(reqId)) {
    const fourHundrerErrorObject = {
      error: 'Id must be a positive integer'
    };
    res.status(400);
    res.send(fourHundrerErrorObject);
  }

  if (!data.notes[reqId]) {
    const cannotFindObject = {
      error: `cannot find note with id ${reqId}`
    };
    res.status(404);
    res.send(cannotFindObject);

  } else {
    delete data.notes[reqId];
    res.sendStatus(200);
  }

});

app.use((req, res, err) => {
  const fiveHundredObject = {
    error: 'An unexpected error occured'
  };
  console.error(err);
  res.status(500);
  res.send(fiveHundredObject);

});

app.listen(3000, () => {
// eslint-disable-next-line no-console
  console.log('The server is listening on port 3000!');
});

// http post localhost:3000/api/notes/ content="Interia is a property of matter"
// http get localhost:3000/api/notes/2
// http get localhost:3000/api/notes
// http post localhost:3000/derp/data.json content="blah"
// http delete localhost:3000/api/notes/trollolol
// http delete localhost:3000/api/notes/36
// http delete localhost:3000/api/notes/9
