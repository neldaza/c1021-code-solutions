const data = require('./data.json');
const fs = require('fs');

if (process.argv[2] === 'read') {
  for (const property in data.notes) {
    console.log(`${property}: ${data.notes[property]}`);
  }
} else if (process.argv[2] === 'create') {
  const currentId = data.nextId;
  data.notes[currentId] = process.argv[3];
  data.nextId++;
  const newObject = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', newObject, 'utf-8', function (err) {
    if (err) {
      throw err;
    }
  });
} else if (process.argv[2] === 'delete') {
  const id = process.argv[3];
  delete data.notes[id];
  const newDeleteObject = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', newDeleteObject, 'utf-8', function (err) {
    if (err) {
      throw err;
    }
  });
} else if (process.argv[2] === 'update') {
  const id = process.argv[3];
  data.notes[id] = process.argv[4];
  const newUpdateObject = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', newUpdateObject, 'utf-8', err => {
    if (err) {
      throw err;
    }
  });
}
