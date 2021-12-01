const express = require('express');
const app = express();

app.use(function (req, res) {

  res.send('Response has been recorded');
});

app.listen(3000, () => {

});
