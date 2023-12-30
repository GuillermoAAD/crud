const { DataTypes } = require('sequelize');
const sequelize = require('../../database/db');

const User = sequelize.define('User', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Otros campos de user
});

module.exports = User;
