const { Sequelize } = require('sequelize');

const db = new Sequelize('blades', 'root', 'sudoroot',
  {
    dialect: 'sqlite',
    storage: './blades.sqlite'
  }
);

const Blade = db.define('Blade', {
  name: Sequelize.STRING,
  stens: Sequelize.STRING,
  manufacturerNumber: Sequelize.STRING,
  manufacturerName: Sequelize.STRING,
});

Blade.sync();

exports.Blade = Blade;