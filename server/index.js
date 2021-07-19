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
  db.Blade.create({name: req.body.name, description: req.body.stens, quantity: req.body.quantity})
  .then(() => {
    db.Blade
      .findOrCreate({where: {name: req.body.name, description: req.body.stens, quantity: req.body.quantity}})
      .then((blade, created) => {
        res.sendStatus(created ? 201 : 200);
      })
  })
  .catch(err => {
    console.log(err);
  })
});

app.get('/api/manufacturers', (req, res) => {
  db.Manufacturer.findAll()
    .then(manufacturers => {
      res.send(manufacturers);
    })
    .catch(err => {
      console.log(err);
    })
});

app.post('/api/manufacturer', (req, res) => {
  db.Manufacturer.create({manufacturerName: req.body.manufacturerName, manufacturerID: req.body.manufacturerID})
  .then(() => {
    db.Manufacturer
      .findOrCreate({where: {name: req.body.manufacturerName, manufacturerID: req.body.manufacturerID}})
      .then((manufacturer, created) => {
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