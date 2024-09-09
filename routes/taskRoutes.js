const express = require('express');
const router = express.Router();

const taskController = require('../controllers/taskController');

router.get('/', (req, res) => {
    res.redirect('/tasks');  // Redirecciona a la página de tareas
});

router.get('/add-task', taskController.getAddTask);
router.post('/add-task', taskController.postAddTask);

router.get('/tasks', taskController.getTasks);
router.post('/mark-complete', taskController.postMarkComplete);
router.post('/delete-task', taskController.postDeleteTask);

module.exports = router;
