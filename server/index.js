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
  db.Blade.create({stens: req.body.stens, quantity: req.body.quantity, manufacturer: req.body.manufacturer})
  .then(() => {
    db.Blade
      .findOrCreate({where: {stens: req.body.stens, quantity: req.body.quantity, manufacturer: req.body.manufacturer}})
      .then((blade, created) => {
        res.sendStatus(created ? 201 : 200);
      })
  })
  .catch(err => {
    console.log(err);
  })
});

app.listen(port, () => {
  console.log('BladeList app listening at http://localhost:3000');
});