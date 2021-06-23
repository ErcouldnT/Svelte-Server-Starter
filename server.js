const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const client = path.resolve('client', 'dist');

app.use(cors());
app.use(express.static(client));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(client, 'index.html'));
});

const server = app.listen(process.env.PORT || 5000, () => {
  const host = 'localhost';
  const port = server.address().port;
  console.log(`Server is up at http://${host}:${port}`);
});
