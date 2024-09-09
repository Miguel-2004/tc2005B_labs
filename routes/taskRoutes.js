const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const authController = require('../controllers/authController');

// Middleware para proteger rutas
const isAuth = (req, res, next) => {
    if (!req.session.isLoggedIn) {
        return res.redirect('/login');
    }
    next();
};

// Rutas para tareas
router.get('/tasks', isAuth, taskController.getTasks);
router.post('/add-task', isAuth, taskController.postAddTask);

// Rutas de autenticación
router.get('/signup', authController.getSignup);
router.post('/signup', authController.postSignup);
router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);
router.post('/logout', isAuth, authController.postLogout);

// Redirigir la raíz a /tasks
router.get('/', (req, res) => {
    res.redirect('/tasks');
});

module.exports = router;
