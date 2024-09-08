const express = require('express');
const router = express.Router();

// Ruta para experiencia deportiva
router.get('/deportiva', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Experiencia Deportiva</title>
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
                <h1 class="title">Experiencia Deportiva</h1>
                <p>A lo largo de los años, he participado en una variedad de actividades deportivas que me han ayudado a crecer tanto personal como profesionalmente. Mi pasión por el deporte me ha enseñado la importancia de la disciplina, el trabajo en equipo y la perseverancia.</p>
                <p>He sido miembro de varios equipos deportivos y he competido en diferentes torneos y campeonatos. Esta experiencia me ha brindado la oportunidad de desarrollar habilidades de liderazgo y colaboración, así como de mantenerme en forma y saludable.</p>
                <figure class="image is-4by3">
                    <img src="/Images/deportiva.jpeg" alt="Experiencia Deportiva">
                </figure>
            </section>
        </div>
    </body>
    </html>
    `);
});

// Ruta para experiencia escolar
router.get('/escolar', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Experiencia Escolar</title>
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
                <h1 class="title">Experiencia Escolar</h1>
                <p>Actualmente estoy cursando el quinto semestre de Ingeniería en Tecnologías Computacionales en el Tecnológico de Monterrey. Esta etapa de mi educación me ha permitido profundizar en áreas clave de la tecnología y la ingeniería.</p>
                <p>Mis estudios me han proporcionado una sólida base en programación, sistemas informáticos y desarrollo de software. Además, participo activamente en proyectos académicos y colaboro con mis compañeros para abordar problemas complejos y desarrollar soluciones innovadoras.</p>
                <figure class="image is-4by3">
                    <img src="/Images/escolar.jpeg" alt="Experiencia Escolar">
                </figure>
            </section>
        </div>
    </body>
    </html>
    `);
});

// Ruta para experiencias de viajes
router.get('/viajes', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Mis Viajes</title>
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
                <h1 class="title">Mis Viajes</h1>
                <p>Uno de mis intereses personales es explorar nuevos lugares y culturas. A lo largo de los años, he tenido la oportunidad de viajar a varios destinos tanto nacionales como internacionales.</p>
                <p>Cada viaje ha sido una experiencia enriquecedora que me ha permitido aprender sobre diferentes tradiciones y estilos de vida. También he disfrutado de la oportunidad de conocer a personas de diversos orígenes y ampliar mi perspectiva del mundo.</p>
                <figure class="image is-4by3">
                    <img src="/Images/viajes.jpeg" alt="Mis Viajes">
                </figure>
            </section>
        </div>
    </body>
    </html>
    `);
});

module.exports = router;
