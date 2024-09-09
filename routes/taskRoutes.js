const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Redirigir al listado de tareas cuando accede a la raíz
router.get('/', (req, res) => {
    res.redirect('/tasks');
});

// Ruta para agregar una tarea
router.get('/add-task', (req, res) => {
    res.render('add-task', { pageTitle: 'Agregar Tarea' });
});

router.post('/add-task', (req, res) => {
    const Task = require('../models/task');
    const newTask = new Task(req.body.description);
    newTask.save();
    res.redirect('/tasks');
});

// Ruta para mostrar la lista de tareas
router.get('/tasks', taskController.getTasks);

// Ruta para establecer una cookie
router.get('/set-cookie', taskController.setCookie);

// Ruta para leer una cookie
router.get('/get-cookie', taskController.getCookie);

// Ruta para establecer una variable de sesión
router.get('/set-session', taskController.setSession);

// Ruta para cerrar sesión
router.get('/logout', taskController.logout);

module.exports = router;
