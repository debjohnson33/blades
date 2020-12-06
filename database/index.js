const { Sequelize } = require('sequelize');

const db = new Sequelize('goatlist', 'root', 'sudoroot',
  {
    host: 'localhost',
    dialect: 'mariadb'
  }
);

const Goat = db.define('Goat', {
  name: Sequelize.STRING,
  description: Sequelize.STRING
});

Goat.sync();

exports.Goat = Goat;