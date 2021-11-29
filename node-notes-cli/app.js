const data = require('./data.json');

const dataStringify = JSON.stringify(data.notes, null, 2);

const parsedNotes = JSON.parse(dataStringify);

for (const property in parsedNotes) {
  console.log(`${property}: ${parsedNotes[property]}`);
}
