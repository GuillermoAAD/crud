const express = require('express');
const sequelize = require('../database/db');
const usersController = require('../controller/UserController');

// Cargar variables de entorno desde .env
require('dotenv').config(); 


const app = express();
const port = 3001;

app.use(express.json());

app.use(usersController); // Asocia las rutas del controlador

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Servidor Node.js en http://localhost:${port}`);
  });
});
