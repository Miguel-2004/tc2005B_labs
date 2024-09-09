const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const csrf = require('csurf');
const cookieParser = require('cookie-parser');

const csrfProtection = csrf();
const app = express();
const taskRoutes = require('./routes/taskRoutes');

// Configurar el motor de plantillas EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

// Configurar sesiones
app.use(session({
    secret: 'mi string secreto',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60, // 1 hora
        httpOnly: true,         // Solo accesible desde el servidor
        secure: false           // En 'false' si no usas HTTPS
    }
}));

// Protección CSRF
app.use(csrfProtection);

// Pasar el token CSRF a todas las vistas
app.use((req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
});

// Importar rutas
app.use(taskRoutes);

// Arrancar el servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
