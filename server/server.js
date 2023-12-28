const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('¡Hola desde el servidor!');
});

app.listen(port, () => {
  console.log(`Servidor Node.js en http://localhost:${port}`);
});
