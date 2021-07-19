const { Sequelize } = require('sequelize');

const db = new Sequelize('blades', 'root', 'sudoroot',
  {
    dialect: 'sqlite',
    storage: './blades.sqlite'
  }
);

const Blade = db.define('Blade', {
  stens: Sequelize.STRING,
  quantity: Sequelize.INTEGER,
  manufacturer: Sequelize.STRING
});

Blade.sync();

exports.Blade = Blade;