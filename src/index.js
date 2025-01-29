
// Importar Express
const express = require('express');
const morgan = require('morgan');
const fs = require('fs');


// Inicializar la aplicación Express
const app = express();

// Definir el puerto para el servidor
const PORT = 3001;

// Ruta principal
app.get('/getImages', (req, res) => {
    console.log('ENTRMAOS');
    const filePath = '/Users/fernandomiguel/Documents/React/server-node/src/data/places.json';
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return;
        }
        try {
            const jsonData = JSON.parse(data); // Convertir a objeto JSON
            console.log('Datos del JSON:', jsonData);
            res.json(jsonData);
        } catch (parseError) {
            console.error('Error al parsear JSON:', parseError);
        }
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});