const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Redirigir al listado de tareas cuando accede a la raíz
router.get('/', (req, res) => {
    res.redirect('/tasks');
});

// Mostrar la lista de tareas
router.get('/tasks', taskController.getTasks);

// Agregar una nueva tarea
router.post('/add-task', taskController.postAddTask);

// Obtener una tarea por ID
router.get('/tasks/:taskId', taskController.getTaskById);

// Actualizar una tarea
router.post('/update-task', taskController.postUpdateTask);

module.exports = router;
