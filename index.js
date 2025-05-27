const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const response = {
    timestamp: new Date().toISOString(),
    ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress
  };
  res.json(response);
});

app.listen(port, () => {
  console.log(`SimpleTimeService running at http://localhost:${port}`);
});

