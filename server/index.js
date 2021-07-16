const express = require('express');
const app = express();
const port = 3000;

const db = require('../database');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/api/blades', (req, res) => {
  db.Blade.findAll()
    .then(blades => {
      res.send(blades);
    })
    .catch(err => {
      console.log(err);
    })
});

app.post('/api/blades', (req, res) => {
  db.Blade.create({name: req.body.name, description: req.body.description})
  .then(() => {
    db.Blade
      .findOrCreate({where: {name: req.body.name, description: req.body.description}})
      .then((cow, created) => {
        res.sendStatus(created ? 201 : 200);
      })
  })
  .catch(err => {
    console.log(err);
  })
});

app.listen(port, () => {
  console.log('GoatList app listening at http://localhost:3000');
});