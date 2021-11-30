const fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', function read(err, data) {
  if (err) {
    throw err;
  }
  const txt = data;
  console.log(txt);
});
