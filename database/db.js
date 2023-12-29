const { Sequelize } = require('sequelize');

// Cargar variables de entorno desde .env
require('dotenv').config({path: '../.env'})

const sequelize = new Sequelize(
  process.env.DB_DATABASE ?? '',
  process.env.DB_USERNAME ?? '',
  process.env.DB_PASSWORD ?? '',
  {
    host: process.env.DB_HOST ?? 'localhost',
    dialect: process.env.DB_CONNECTION ?? 'mysql',
    sync: false, // Desactiva la sincronización automática
});

module.exports = sequelize;
