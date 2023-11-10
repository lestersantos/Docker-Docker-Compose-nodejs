// Importar Express
const express = require('express');
// Crear una instancia de Express
const app = express();

// Ruta para el endpoint "/estudiante"
app.get('/estudiante', (req, res) => {
  // Nombre y número de carnet
  const nombre = 'Luis Alejandro Ajucum Santos';
  const carnet = '0901-14-15273';
  // Enviar una respuesta con el nombre y el número de carnet
  res.send(`Nombre: ${nombre}, Carnet: ${carnet}`);
});

// Puerto en el que se ejecutará el servidor
const port = 3000;

// Iniciar el servidor en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
