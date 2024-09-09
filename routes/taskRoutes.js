const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const checkPermission = require('../middleware/checkPermission');

// Ruta para agregar una tarea (requiere el permiso "create")
router.post('/add-task', checkPermission('create'), taskController.postAddTask);

// Otras rutas...
module.exports = router;
