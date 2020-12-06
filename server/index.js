const express = require('express');
const app = express();
const port = 3000;

const { Goat } = require('../database/index.js');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello!');
});

app.listen(port, () => {
  console.log('GoatList app listening at http://localhost:3000');
});