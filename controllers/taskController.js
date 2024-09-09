const Task = require('../models/task');

// Mostrar todas las tareas
exports.getTasks = (req, res, next) => {
    Task.fetchAll()
        .then(([rows]) => {
            res.render('task-list', { pageTitle: 'Lista de Tareas', tasks: rows });
        })
        .catch(err => console.log(err));
};

// Guardar una nueva tarea
exports.postAddTask = (req, res, next) => {
    const newTask = new Task(req.body.description);
    newTask.save()
        .then(() => {
            res.redirect('/tasks');
        })
        .catch(err => console.log(err));
};

// Obtener una tarea por ID
exports.getTaskById = (req, res, next) => {
    const taskId = req.params.taskId;
    Task.findById(taskId)
        .then(([rows]) => {
            if (rows.length > 0) {
                res.render('task-detail', { task: rows[0] });
            } else {
                res.redirect('/tasks');
            }
        })
        .catch(err => console.log(err));
};

// Actualizar una tarea (marcar como completada)
exports.postUpdateTask = (req, res, next) => {
    const taskId = req.body.taskId;
    const completado = req.body.completado === 'true';
    Task.update(taskId, completado)
        .then(() => {
            res.redirect('/tasks');
        })
        .catch(err => console.log(err));
};
