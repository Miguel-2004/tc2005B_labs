const express = require('express');
const router = express.Router();

// Ruta para la página principal
router.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Página Principal</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css">
    </head>
    <body>
        <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
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
                            <a class="navbar-item" href="/experiencias/deportiva">DEPORTIVA</a>
                            <a class="navbar-item" href="/experiencias/escolar">ESCOLAR</a>
                            <a class="navbar-item" href="/experiencias/viajes">MIS VIAJES</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <section class="hero is-primary is-fullheight">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title is-size-1">MI BLOG PERSONAL</h1>
                    <p class="subtitle">Descubre más sobre mí, mis pasiones, mis viajes y mi experiencia.</p>
                </div>
            </div>
        </section>
        <footer class="footer has-background-dark has-text-white-ter">
            <div class="content has-text-centered">
                <p>&copy; 2024 Miguel Angel Becerra Ayala. Todos los derechos reservados.</p>
            </div>
        </footer>
    </body>
    </html>
    `);
});

// Ruta para "MÁS SOBRE MÍ"
router.get('/about', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Más Sobre Mí</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css">
    </head>
    <body>
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
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
                    <a class="navbar-item" href="/experiencias/deportiva">DEPORTIVA</a>
                    <a class="navbar-item" href="/experiencias/escolar">ESCOLAR</a>
                    <a class="navbar-item" href="/experiencias/viajes">MIS VIAJES</a>
                </div>
            </div>
        </div>
    </div>
</nav>
        <div class="container">
            <section class="section">
                <h1 class="title">Más Sobre Mí</h1>
                <p>Soy originario de San Juan del Río, Querétaro, y actualmente vivo en Juriquilla. Me encanta aprender cosas nuevas y siempre estoy buscando crecer tanto a nivel personal como profesional.</p>
                <p>Estoy en el quinto semestre de Ingeniería en Tecnologías Computacionales en el Tec de Monterrey.</p>
                <p>Me gusta programar, me considero una persona perseverante y trabajadora.</p>
                <div class="columns is-centered">
                    <div class="column is-half">
                        <figure class="image">
                            <img src="Images/rde.jpeg" alt="Sobre mí">
                        </figure>
                    </div>
                    <div class="column is-half">
                        <figure class="image">
                            <img src="/Images/miami.jpeg" alt="Sobre mí">
                        </figure>
                    </div>
                </div>
            </section>
        </div>
    </body>
    </html>
    `);
});

// Ruta para "CONTACTO" con formulario
router.get('/contact', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contacto</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css">
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
                            <a class="navbar-item" href="/experiencias/deportiva">DEPORTIVA</a>
                            <a class="navbar-item" href="/experiencias/escolar">ESCOLAR</a>
                            <a class="navbar-item" href="/experiencias/viajes">MIS VIAJES</a>
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
                    <div class="field">
                        <label class="label">Mensaje</label>
                        <div class="control">
                            <textarea class="textarea" name="mensaje" placeholder="Tu mensaje" required></textarea>
                        </div>
                    </div>
                    <div class="field is-grouped">
                        <div class="control">
                            <button class="button is-primary">Enviar</button>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    </body>
    </html>
    `);
});

// Manejo del formulario de contacto
router.post('/contact', (req, res) => {
    const { nombre, email, mensaje } = req.body;

    const data = `Nombre: ${nombre}\nCorreo: ${email}\nMensaje: ${mensaje}\n\n`;

    fs.appendFile(path.join(__dirname, '../contact_data.txt'), data, (err) => {
        if (err) {
            console.error('Error al guardar los datos:', err);
            res.status(500).send('Hubo un problema al procesar tu solicitud.');
        } else {
            res.redirect('/contact/thanks');
        }
    });
});

// Ruta para la confirmación del envío
router.get('/contact/thanks', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Gracias por Contactarnos</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css">
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
        <section class="section">
            <div class="container has-text-centered">
                <h1 class="title">¡Gracias por tu mensaje!</h1>
                <p class="subtitle">Tu información ha sido recibida y te responderé lo antes posible.</p>
                <a href="/" class="button is-primary">Volver a la página principal</a>
            </div>
        </section>
    </body>
    </html>
    `);
});

module.exports = router;
