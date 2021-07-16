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
  quantity: Sequelize.INTEGER,
});

const Manufacturer = db.define('Blade', {
  manufacturerName: Sequelize.STRING,
  manufacturerID: Sequelize.STRING,
});

Blade.belongsTo(Manufacturer);
Manufacturer.hasMany(Blade);

Blade.sync();
Manufacturer.sync();

module.exports = {
  Blade,
  Manufacturer
}