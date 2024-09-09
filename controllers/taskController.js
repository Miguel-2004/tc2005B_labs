const Task = require('../models/task');

// Establecer una cookie
exports.setCookie = (req, res, next) => {
    res.setHeader('Set-Cookie', 'usuario=Juan; HttpOnly');
    res.redirect('/tasks');
};

// Leer una cookie
exports.getCookie = (req, res, next) => {
    const cookies = req.get('Cookie').split(';').find(cookie => cookie.trim().startsWith('usuario'));
    console.log('Cookie:', cookies);
    res.redirect('/tasks');
};

// Establecer una variable de sesión
exports.setSession = (req, res, next) => {
    req.session.usuario = 'Juan';
    res.redirect('/tasks');
};

// Mostrar las tareas con la sesión
exports.getTasks = (req, res, next) => {
    const tasks = Task.fetchAll();
    res.render('task-list', { pageTitle: 'Lista de Tareas', tasks: tasks, usuario: req.session.usuario });
};

// Cerrar sesión
exports.logout = (req, res, next) => {
    req.session.destroy((err) => {
        if (err) {
            console.log('Error al destruir la sesión:', err);
            return next(err);
        }
        res.clearCookie('connect.sid', { path: '/' }); // Elimina la cookie de sesión
        res.redirect('/');
    });
};
