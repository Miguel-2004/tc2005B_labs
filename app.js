const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Middleware para analizar los datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

// Configuración para archivos estáticos
app.use(express.static('LABORATORIOS'));

// Ruta para la página principal
app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Página Principal</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css">
        <style>
            .hero {
                background: rgba(240, 240, 240);
                padding: 3rem 1.5rem;
                color: white;
            }
            .hero h1 {
                font-size: 4rem;
            }
            .navbar {
                background: rgba(101, 167, 255);
            }
            .section {
                background: rgba(0, 0, 0, 0.5);
                padding: 2rem;
                border-radius: 8px;
            }
            footer {
                background: rgba(0, 0, 0, 0.7);
                padding: 2rem;
                color: white;
            }
        </style>
    </head>
    <body>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                    <img src="https://cdn-icons-png.flaticon.com/512/9154/9154891.png" alt="Logo" width="50">
                </a>
                <div class="navbar-menu">
                    <a class="navbar-item" href="/about">MÁS SOBRE MÍ</a>
                    <a class="navbar-item" href="/contact">CONTACTO</a>
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">EXPERIENCIA</a>
                        <div class="navbar-dropdown">
                            <a class="navbar-item" href="/experiencia/deportiva">DEPORTIVA</a>
                            <a class="navbar-item" href="/experiencia/escolar">ESCOLAR</a>
                            <a class="navbar-item" href="/experiencia/viajes">MIS VIAJES</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <section class="hero is-fullheight">
            <div class="hero-body">
                <div class="container">
                    <div>
                        <h1 class="title is-1">MI BLOG PERSONAL</h1>
                        <p class="subtitle">Descubre más sobre mí, mis pasiones, mis viajes y mi experiencia.</p>
                    </div>
                </div>
            </div>
        </section>

        <footer class="footer">
            <div class="content has-text-centered">
                <p>&copy; 2024 Miguel Angel Becerra Ayala. Todos los derechos reservados.</p>
            </div>
        </footer>
    </body>
    </html>
    `);
});

// Ruta para "MÁS SOBRE MÍ"
app.get('/about', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Más Sobre Mí</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css">
        <style>
            .section {
                background: rgba(22, 17, 17, 0.11);
                padding: 2rem;
                border-radius: 8px;
                margin-top: 2rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
            }
            .image-container {
                margin-top: 1rem;
                display: flex;
                justify-content: center;
                gap: 10px;
            }
            .image-container img {
                width: 25%;
                height: auto;
            }
        </style>
    </head>
    <body>
        <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                    <img src="https://cdn-icons-png.flaticon.com/512/9154/9154891.png" alt="Logo" width="50">
                </a>
                <div class="navbar-menu">
                    <a class="navbar-item" href="/about">MÁS SOBRE MÍ</a>
                    <a class="navbar-item" href="/contact">CONTACTO</a>
                </div>
            </div>
        </nav>

        <div class="container">
            <section class="section">
                <h1 class="title">Más Sobre Mí</h1>
                <p>Soy originario de San Juan del Río, Querétaro, y actualmente vivo en Juriquilla. Me encanta aprender cosas nuevas y siempre estoy buscando crecer tanto a nivel personal como profesional.</p>
                <p>Estoy en el quinto semestre de Ingeniería en Tecnologías Computacionales en el Tec de Monterrey.</p>
                <p>Me gusta programar, me considero una persona perseverante y trabajadora.</p>
                <div class="image-container">
                    <img src="/Images/rde.jpeg" alt="Sobre mí">
                    <img src="/Images/miami.jpeg" alt="Sobre mí">
                </div>
            </section>
        </div>
    </body>
    </html>
    `);
});

// Ruta para "CONTACTO" con formulario
// Ruta para "CONTACTO" con formulario y redes sociales
app.get('/contact', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contacto</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css">
        <style>
            body {
                background-color: #f5f5f5; 
                color: black;
            }
            .section {
                background: rgba(22, 17, 17, 0.11);
                padding: 2rem;
                border-radius: 8px;
                margin-top: 2rem;
                text-align: center;
            }
            .social-icons {
                display: flex;
                justify-content: center;
                gap: 20px;
                margin-top: 20px;
            }
            .social-icons img {
                width: 50px;
                height: 50px;
            }
        </style>
    </head>
    <body>
        <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                    <img src="https://cdn-icons-png.flaticon.com/512/9154/9154891.png" alt="Logo" width="50">
                </a>
                <div class="navbar-menu">
                    <a class="navbar-item" href="/about">MÁS SOBRE MÍ</a>
                    <a class="navbar-item" href="/contact">CONTACTO</a>
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">EXPERIENCIA</a>
                        <div class="navbar-dropdown">
                            <a class="navbar-item" href="/experiencia/deportiva">DEPORTIVA</a>
                            <a class="navbar-item" href="/experiencia/escolar">ESCOLAR</a>
                            <a class="navbar-item" href="/experiencia/viajes">MIS VIAJES</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <div class="container">
            <section class="section">
                <h1 class="title">Contacto</h1>
                <p><strong>Correo:</strong> <em>A01710076@tec.mx</em></p>
                <p><strong>Teléfono:</strong> <em>4271075928</em></p>

                <!-- Formulario de contacto -->
                <form action="/contact" method="POST">
                    <div class="field">
                        <label class="label">Nombre</label>
                        <div class="control">
                            <input class="input" type="text" name="nombre" placeholder="Tu nombre" required>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Correo Electrónico</label>
                        <div class="control">
                            <input class="input" type="email" name="email" placeholder="Tu correo electrónico" required>
                        </div>
                    </div>
                    <div class="control">
                        <button class="button is-primary" type="submit">Enviar</button>
                    </div>
                </form>

                <!-- Íconos de redes sociales -->
                <div class="social-icons">
                    <!-- Instagram -->
                    <a href="https://www.instagram.com/miguel_becerra_a?igsh=MTZkaGY4cTU3OWJoNA%3D%3D&utm_source=qr" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram">
                    </a>
                    <!-- Facebook -->
                    <a href="https://www.facebook.com/" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook">
                    </a>
                </div>
            </section>
        </div>
    </body>
    </html>
    `);
});

// Ruta POST para procesar el formulario de contacto
app.post('/contact', (req, res) => {
    const { nombre, email } = req.body;

    // Guardar los datos en un archivo de texto
    const data = `Nombre: ${nombre}, Correo: ${email}\n`;
    fs.appendFile('datos_contacto.txt', data, (err) => {
        if (err) {
            console.error('Error al guardar los datos:', err);
            res.status(500).send('Error al guardar los datos.');
        } else {
            res.send(`
            <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Gracias por Contactar</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css">
            </head>
            <body>
                <section class="section">
                    <div class="container">
                        <h1 class="title">¡Gracias, ${nombre}!</h1>
                        <p>Hemos recibido tu información. Te contactaremos pronto a tu correo: ${email}.</p>
                        <a href="/" class="button is-primary">Volver a la página principal</a>
                    </div>
                </section>
            </body>
            </html>
            `);
        }
    });
});

// Ruta para "EXPERIENCIA - DEPORTIVA"
app.get('/experiencia/deportiva', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Experiencia Deportiva</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css">
        <style>
            body {
                background-color: #f5f5f5;
                color: black;
            }
            .section {
                background: rgba(22, 17, 17, 0.11);
                padding: 2rem;
                border-radius: 8px;
                margin-top: 2rem;
                text-align: center;
            }
            .image-container {
                margin-top: 1rem;
                display: flex;
                justify-content: center;
                gap: 10px;
            }
            .image-container img {
                width: 40%; 
                height: auto; 
            }
        </style>
    </head>
    <body>
        <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                    <img src="https://cdn-icons-png.flaticon.com/512/9154/9154891.png" alt="Logo" width="50">
                </a>
                <div class="navbar-menu">
                    <a class="navbar-item" href="/about">MÁS SOBRE MÍ</a>
                    <a class="navbar-item" href="/contact">CONTACTO</a>
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">EXPERIENCIA</a>
                        <div class="navbar-dropdown">
                            <a class="navbar-item" href="/experiencia/deportiva">DEPORTIVA</a>
                            <a class="navbar-item" href="/experiencia/escolar">ESCOLAR</a>
                            <a class="navbar-item" href="/experiencia/viajes">MIS VIAJES</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <div class="container">
            <section class="section">
                <h1 class="title">Experiencia Deportiva</h1>
                <p>Competí en natación durante 8 años, pero una lesión en la columna me hizo retirarme. Ahora disfruto ir al gimnasio. Antes odiaba el Gym, pero se ha convertido en una parte fundamental de mis días
                Un fun fact de los deportes es que pratique más de 10 deportes en toda mi vida y nunca encontre uno que me gustára más que natación.</p>
                <div class="image-container">
                    <img src="/Images/gym.jpeg" alt="Deporte">
                </div>
            </section>
        </div>
    </body>
    </html>
    `);
});

// Ruta para "EXPERIENCIA - ESCOLAR"
app.get('/experiencia/escolar', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Experiencia Escolar</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css">
        <style>
            body {
                background-color: #f5f5f5; 
                color: black;
            }
            .section {
                background: rgba(22, 17, 17, 0.11);
                padding: 2rem;
                border-radius: 8px;
                margin-top: 2rem;
                text-align: center;
            }
            .image-container {
                margin-top: 1rem;
                display: flex;
                justify-content: center;
                gap: 10px;
            }
            .image-container img {
                width: 20%;
                height: auto;
            }
        </style>
    </head>
    <body>
        <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                    <img src="https://cdn-icons-png.flaticon.com/512/9154/9154891.png" alt="Logo" width="50">
                </a>
                <div class="navbar-menu">
                    <a class="navbar-item" href="/about">MÁS SOBRE MÍ</a>
                    <a class="navbar-item" href="/contact">CONTACTO</a>
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">EXPERIENCIA</a>
                        <div class="navbar-dropdown">
                            <a class="navbar-item" href="/experiencia/deportiva">DEPORTIVA</a>
                            <a class="navbar-item" href="/experiencia/escolar">ESCOLAR</a>
                            <a class="navbar-item" href="/experiencia/viajes">MIS VIAJES</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <div class="container">
            <section class="section">
                <h1 class="title">Experiencia Escolar</h1>
                <p>Desde que me encontraba en la preparatoria y llevé un poco de programación web, quedé fascinado y supe que me quería dedicar a esto. Aunque en la actualidad me cuesta un poco de trabajo aprender algunas cosas, considero que soy bueno en esto.</p>
                <div class="image-container">
                    <img src="/Images/redes.jpg" alt="Escolar">
                </div>
            </section>
        </div>
    </body>
    </html>
    `);
});

// Ruta para "EXPERIENCIA - MIS VIAJES"
app.get('/experiencia/viajes', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Mis Viajes</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css">
        <style>
            body {
                background-color: #f5f5f5;
                color: black;
            }
            .section {
                background: rgba(22, 17, 17, 0.11); 
                padding: 2rem;
                border-radius: 8px;
                margin-top: 2rem;
                text-align: center;
            }
            .image-container {
                margin-top: 1rem;
                display: flex;
                justify-content: center;
                gap: 10px;
            }
            .image-container img {
                width: 10%; 
                height: auto;
            }
        </style>
    </head>
    <body>
        <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                    <img src="https://cdn-icons-png.flaticon.com/512/9154/9154891.png" alt="Logo" width="50">
                </a>
                <div class="navbar-menu">
                    <a class="navbar-item" href="/about">MÁS SOBRE MÍ</a>
                    <a class="navbar-item" href="/contact">CONTACTO</a>
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">EXPERIENCIA</a>
                        <div class="navbar-dropdown">
                            <a class="navbar-item" href="/experiencia/deportiva">DEPORTIVA</a>
                            <a class="navbar-item" href="/experiencia/escolar">ESCOLAR</a>
                            <a class="navbar-item" href="/experiencia/viajes">MIS VIAJES</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <div class="container">
            <section class="section">
                <h1 class="title">Mis Viajes</h1>
                <p>He viajado a 14 países diferentes, explorando nuevas culturas y aprendiendo mucho en cada viaje. Conozco Asia, América y Europa. Espero que algún día pueda conocer muchos lugares del mundo y poder enriquecerme de la cultura global.</p>
                <div class="image-container">
                    <img src="/Images/rdp.jpeg" alt="Viajes">
                    <img src="/Images/Mazatlan.jpeg" alt="Viajes">
                    <img src="/Images/Paris.jpeg" alt="Viajes">
                    <img src="/Images/disney.jpeg" alt="Viajes">
                    <img src="/Images/sananto.jpeg" alt="Viajes">
                    <img src="/Images/sma.jpeg" alt="Viajes">
                </div>
            </section>
        </div>
    </body>
    </html>
    `);
});

// Ruta 404 - Página no encontrada
app.use((req, res) => {
    res.status(404).send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>404 - Página no encontrada</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css">
        <style>
            body {
                background-image: url('https://images.unsplash.com/photo-1518709268802-38e23b4ac810?fit=crop&w=1500&q=80');
                background-size: cover;
                color: white;
            }
            .section {
                background: rgba(0, 0, 0, 0.7);
                padding: 2rem;
                border-radius: 8px;
                margin-top: 2rem;
            }
        </style>
    </head>
    <body>
        <section class="section">
            <div class="container">
                <h1 class="title">404 - Página no encontrada</h1>
                <p>Lo sentimos, la página que buscas no está disponible.</p>
                <a href="/" class="button is-primary">Volver al inicio</a>
            </div>
        </section>
    </body>
    </html>
    `);
});

// Iniciar el servidor en el puerto 3000
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
