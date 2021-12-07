const express = require('express');
const app = express();
const data = require('./data.json');
const fs = require('fs');
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
    const errorObject =
    {
      error: 'id must be a positive integer'
    };
    res.status(400);
    res.send(errorObject);
    return;
  }
  const array = [];

  if (!data.notes[reqId]) {
    const cannotFindObject =
    {
      error: `cannot find note with id ${reqId}`
    };
    res.status(404);
    res.send(cannotFindObject);
    return;
  } else {
    array.push(data.notes[reqId]);
  }

  res.send(array[0]);

});

let nextId = data.nextId;

app.post('/api/notes', function (req, res) {
  const reqBody = req.body;
  if (!reqBody.content) {
    const errorObject =
    {
      error: 'content is a required field'
    };
    res.status(400);
    res.send(errorObject);
  } else if (reqBody.content) {
    reqBody.id = nextId;
    data.notes[nextId] = reqBody;
    fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf-8', function (err) {
      if (err) {
        console.error(err);
        const fiveHundredObject =
        {
          error: 'An unexpected error occured'
        };
        res.status(500);
        res.send(fiveHundredObject);
      }
      nextId++;
      res.status(201);
      res.send(reqBody);
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const reqId = Number(req.params.id);

  if (isNaN(reqId)) {
    const fourHundrerErrorObject =
    {
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
    fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf-8', function (err) {
      if (err) {
        console.error(err);
        const fiveHundredObject =
        {
          error: 'An unexpected error occured'
        };
        res.status(500);
        res.send(fiveHundredObject);
        return;
      }
      res.sendStatus(204);
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const reqId = Number(req.params.id);
  const reqBody = req.body;

  if (isNaN(reqId)) {
    const fourHundrerErrorObject = {
      error: 'Id must be a positive integer'
    };
    res.status(400);
    res.send(fourHundrerErrorObject);
  } else if (!reqBody.content) {
    const errorObject = {
      error: 'content is a required field'
    };
    res.status(400);
    res.send(errorObject);
  } else if (!data.notes[reqId]) {
    const fourHundredFourErrorObject = {
      error: `cannot find note with id ${reqId}`
    };
    res.status(404);
    res.send(fourHundredFourErrorObject);
  } else {
    data.notes[reqId].content = reqBody.content;
    fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf-8', function (err) {
      if (err) {
        console.error(err);
        const fiveHundredObject = {
          error: 'An unexpected error occured'
        };
        res.status(500);
        res.send(fiveHundredObject);
        return;
      }
      res.status(200);
      res.send(data.notes[reqId]);
    });
  }
});

app.listen(3000, () => {
// eslint-disable-next-line no-console
  console.log('The server is listening on port 3000!');
});

// http post localhost:3000/api/notes/ content="Interia is a property of matter"
// http get localhost:3000/api/notes/2
// http get localhost:3000/api/notes
// http post localhost:3000/api/notes content="Hey there new post has been submitted"
// http post localhost:3000/derp/data.json content="blah"
// http delete localhost:3000/api/notes/trollolol
// http delete localhost:3000/api/notes/36
// http delete localhost:3000/api/notes/9

// http put localhost:3000/derp/data.json
// http put localhost:3000/api/notes/trollolol
// http put localhost:3000/api/notes/1
// http put localhost:3000/api/notes/13
// http put localhost:3000/api/notes/2 content="hello there"
