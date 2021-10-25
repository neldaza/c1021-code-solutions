var books = [
  {
    ISBN: '1234-5678',
    Title: 'The Up',
    Author: 'Poo Johnson'
  },
  {
    ISBN: '8765-4321',
    Title: 'The Down',
    Author: 'P Ricky'

  },
  {
    ISBN: '101112-131415',
    Title: 'Afraid of the Dark',
    Author: 'Some Guy'

  }
];
console.log(books);
console.log('Books Array JSON Stringified:', JSON.stringify(books));
console.log('Typeof Books Value:', typeof books);

var student = `
  {
  "Name": "John Smith",
  "ID": 1
  }
`;

console.log('Value of Student String:', student);
console.log('Typeof Student:', typeof student);

var studentAsObject = JSON.parse(student);

console.log('Value of studentAsObject:', studentAsObject);
console.log('Type of studentasObject:', typeof studentAsObject);
