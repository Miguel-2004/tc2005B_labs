const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware para analizar los datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

// Configuración para archivos estáticos
app.use(express.static('LABORATORIOS'));

// Importar rutas de módulos
const mainRoutes = require('./routes/mainRoutes');
const experiencesRoutes = require('./routes/experiencesRoutes');

// Usar rutas
app.use('/', mainRoutes);
app.use('/experiencias', experiencesRoutes);

// Manejo de rutas no definidas (404)
app.use((req, res) => {
    res.status(404).send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>404 - Página No Encontrada</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css">
    </head>
    <body>
        <section class="hero is-danger is-fullheight">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title">404</h1>
                    <p class="subtitle">La página que buscas no existe.</p>
                    <a href="/" class="button is-primary">Volver a la página principal</a>
                </div>
            </div>
        </section>
    </body>
    </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
