const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();

// Importar rutas
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
        httpOnly: true,         // La cookie solo es accesible desde el servidor
        secure: false           // Configurar como 'false' si no estás usando HTTPS
    }
}));

app.use(taskRoutes);

// Arrancar el servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
