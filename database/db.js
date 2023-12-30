const { Sequelize } = require('sequelize');

// Cargar variables de entorno desde .env
require('dotenv').config({path: '../.env'})
// console.log(process.env)

const sequelize = new Sequelize(
  process.env.DEV_DB_DATABASE ?? '',
  process.env.DEV_DB_USERNAME ?? '',
  process.env.DEV_DB_PASSWORD ?? '',
  {
    host: process.env.DEV_DB_HOST ?? 'localhost',
    dialect: process.env.DEV_DB_CONNECTION ?? 'mysql',
    sync: false, // Desactiva la sincronización automática
});

module.exports = sequelize;
