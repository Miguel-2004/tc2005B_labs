// Función para calcular el promedio de un arreglo de números
function calcularPromedio(numeros) {
    const suma = numeros.reduce((a, b) => a + b, 0);
    return suma / numeros.length;
}

const numeros = [5, 10, 15, 20];
console.log(`Promedio: ${calcularPromedio(numeros)}`);

// Módulo `fs` para escribir en un archivo
const fs = require('fs');

function escribirEnArchivo(nombreArchivo, contenido) {
    fs.writeFileSync(nombreArchivo, contenido);
    console.log(`Se ha escrito en el archivo ${nombreArchivo}`);
}

escribirEnArchivo('saludo.txt', 'Hola, esto es un texto escrito desde Node.js');

// Módulo `http` para crear un servidor
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    
    const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Mi Blog Personal</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css">
        <style>
            body {
                font-family: 'Arial', sans-serif;
            }
            .hero {
                background-image: url('https://images.unsplash.com/photo-1506748686214e9df14f1f2d6d740aebc1b7e8d2f067f?fit=crop&w=1600&h=900');
                background-size: cover;
                color: white;
                padding: 5rem 1.5rem;
            }
            .hero-body {
                text-align: center;
            }
            .card {
                box-shadow: 0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08);
                border-radius: 8px;
                overflow: hidden;
                transition: transform 0.3s, box-shadow 0.3s;
            }
            .card:hover {
                transform: translateY(-10px);
                box-shadow: 0 10px 20px rgba(0,0,0,0.2);
            }
            .card-image img {
                transition: transform 0.3s;
            }
            .card-image img:hover {
                transform: scale(1.05);
            }
            .section {
                margin-top: 2rem;
            }
            .columns img {
                border-radius: 8px;
                transition: transform 0.3s;
            }
            .columns img:hover {
                transform: scale(1.05);
            }
            .navbar {
                margin-bottom: 2rem;
            }
            .navbar-item img {
                max-height: 2.5rem;
            }
            .hero-container {
                background-image: url('Images/rdp.jpeg'); 
                background-size: cover; 
                background-position: center; 
                background-repeat: no-repeat; 
                color: white;
                padding: 20px;
                height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
            }
        </style>
    </head>
    <body>
        <!-- Navbar -->
        <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="#">
                    <img src="https://cdn-icons-png.flaticon.com/512/9154/9154891.png" alt="Logo">
                </a>
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item">
                        MÁS SOBRE MÍ
                    </a>
                    <a class="navbar-item">
                        CONTACTO
                    </a>
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                            EXPERIENCIA
                        </a>
                        <div class="navbar-dropdown">
                            <a class="navbar-item">
                                DEPORTIVA
                            </a>
                            <a class="navbar-item is-active">
                                ESCOLAR
                            </a>
                            <a class="navbar-item">
                                MIS VIAJES
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <section class="hero is-large">
            <div class="hero-body">
                <div class="container hero-container">
                    <h1 class="title is-2">MI BLOG PERSONAL</h1>
                </div>
            </div>
        </section>

        <!-- Main Content -->
        <div class="container">
            <!-- Introduction Section -->
            <section class="section">
                <div class="content">
                    <h3 class="title is-3">¡Hola, soy Miguel!</h3>
                    <p>Mi nombre es Miguel Angel Becerra Ayala y estoy entre el 4° y 5° semestre de Ingeniería en Tecnologías Computacionales.</p>
                    <p>Soy originario de San Juan del Río Querétaro y actualmente vivo en Juriquilla con mi hermana.</p>
                    <p>Me encantan las cosas nuevas y siempre estoy buscando aprender más. Me considero una persona curiosa y aventurera.</p>
                </div>
            </section>

            <!-- Contact Section -->
            <section class="section">
                <h3 class="title is-3">Contacto</h3>
                <p><strong>Correo:</strong> <em>A01710076@tec.mx</em></p>
                <p><strong>Número de Teléfono:</strong> <em>4271075928</em></p>
            </section>

            <!-- Hobbies Section -->
            <section class="section">
                <h2 class="title is-3">Mis Gustos y Hobbies</h2>
                <p>Me encanta nadar, y fui competidor por más de 8 años, pero una lesión en la columna me detuvo. Ahora me gusta ir al gym.
                También me gusta leer, especialmente ciencia ficción, y viajar es otra de mis pasiones. He tenido la suerte de conocer 14 países...</p>
                <div class="columns is-multiline">
                    <div class="column is-one-third">
                        <figure class="image">
                            <img src="Images/disney.jpeg" alt="Disney">
                        </figure>
                    </div>
                    <div class="column is-one-third">
                        <figure class="image">
                            <img src="Images/paris.jpeg" alt="Paris">
                        </figure>
                    </div>
                    <div class="column is-one-third">
                        <figure class="image">
                            <img src="Images/rdc.jpeg" alt="República Dominicana">
                        </figure>
                    </div>
                </div>
            </section>

            <!-- Experience Section -->
            <section class="section">
                <h2 class="title is-3">Mi Experiencia</h2>
                <p>Desde el bachillerato, cuando tomé mi primera clase de Programación, comenzó mi pasión por este mundo. Me fascinó cómo con solo unas líneas de código podía crear algo funcional y útil.
                    He trabajado en diversos proyectos que han ampliado mis conocimientos en programación y desarrollo de software. Cada experiencia ha sido una oportunidad para aprender y mejorar.</p>
                <div class="columns is-centered">
                    <div class="column is-half">
                        <figure class="image">
                            <img src="Images/redes.jpg" alt="Redes">
                        </figure>
                    </div>
                </div>
            </section>

            <!-- Objectives Section -->
            <section class="section">
                <h2 class="title is-3">Objetivos y Aspiraciones</h2>
                <p>Tengo muchas expectativas para mi vida y me gustaría ser una persona exitosa. He elaborado algunos planes para mi futuro, incluyendo obtener un título avanzado en mi campo de estudio y contribuir a proyectos significativos.
                Mi objetivo principal es combinar mi pasión por la tecnología con mi deseo de hacer una diferencia en el mundo, creando soluciones innovadoras y eficientes.</p>
                <div class="columns is-centered">
                    <div class="column is-half">
                        <figure class="image">
                            <img src="Images/iasp.jpg" alt="Templo">
                        </figure>
                    </div>
                </div>
            </section>
        </div>

        <!-- Footer -->
        <footer class="footer">
            <div class="content has-text-centered">
                <p>&copy; 2024 Miguel Angel Becerra Ayala. Todos los derechos reservados.</p>
            </div>
        </footer>

        <!-- Scripts -->
        <script src="https://cdn.jsdelivr.net/npm/bulma@1.0.2/js/bulma.min.js"></script>
    </body>
    </html>
    `;

    res.end(htmlContent);
});

// El servidor escucha en el puerto 3000
server.listen(3000, 'localhost', () => {
    console.log('Servidor en ejecución en http://localhost:3000');
});

