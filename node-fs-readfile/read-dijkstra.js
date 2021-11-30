
const fs = require('fs');

fs.readFile('dijkstra.txt', 'utf-8', function read(err, data) {
  if (err) {
    throw err;
  }
  const content = data;

  console.log(content);

}
);
