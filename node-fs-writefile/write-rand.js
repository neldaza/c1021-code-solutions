const fs = require('fs');

const data = Math.random();

fs.writeFile('random.txt', data.toString(), 'utf-8', function (err) {
  if (err) {
    throw err;
  }
});
