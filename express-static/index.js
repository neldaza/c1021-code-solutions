const express = require('express');
const app = express();
const path = require('path');
const dirNameAndPublicJoin = path.join(__dirname, 'public');
const staticMiddleWare = express.static(dirNameAndPublicJoin);

app.use(staticMiddleWare);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('The server is listening on port 3000!');
});
