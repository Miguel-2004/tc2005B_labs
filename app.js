const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');

// Configuración del motor de plantillas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para analizar los datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware para archivos estáticos (imágenes, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para la página principal
app.get('/', (req, res) => res.render('main'));

// Ruta para "MÁS SOBRE MÍ"
app.get('/mas-sobre-mi', (req, res) => res.render('mas-sobre-mi'));

// Ruta para "CONTACTO"
app.get('/contacto', (req, res) => res.render('contacto'));

app.post('/contacto', (req, res) => {
    const { nombre, email } = req.body;
    const data = `Nombre: ${nombre}, Correo: ${email}\n`;
    
    // Guardar los datos en un archivo de texto
    fs.appendFile('datos_contacto.txt', data, (err) => {
        if (err) {
            return res.send('Error al guardar los datos.');
        }
        res.render('thankyou', { nombre, email });
    });
});

// Ruta para "EXPERIENCIA - DEPORTIVA"
app.get('/experiencia-deportiva', (req, res) => res.render('experiencia-deportiva'));

// Ruta para "EXPERIENCIA - ESCOLAR"
app.get('/experiencia-escolar', (req, res) => res.render('experiencia-escolar'));

// Ruta para "EXPERIENCIA - VIAJES"
app.get('/viajes', (req, res) => res.render('viajes'));

// Ruta para manejo de página no encontrada (404)
app.use((req, res) => {
    res.status(404).render('404');
});

// Puerto de escucha
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
