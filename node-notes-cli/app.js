const data = require('./data.json');
const fs = require('fs');

const notesStringify = JSON.stringify(data.notes, null, 2);
const objectNotes = JSON.parse(notesStringify);

const dataStringify = JSON.stringify(data, null, 2);
const dataObject = JSON.parse(dataStringify);

if (process.argv[2] === 'read') {
  for (const property in objectNotes) {
    console.log(`${property}: ${objectNotes[property]}`);
  }
} else if (process.argv[2] === 'create') {
  const currentId = dataObject.nextId - 1;
  dataObject.notes[currentId + 1] = process.argv[3];
  dataObject.nextId++;
  const newObject = JSON.stringify(dataObject, null, 2);
  fs.writeFile('data.json', newObject, 'utf-8', function (err) {
    if (err) {
      throw err;
    }
  });
}
