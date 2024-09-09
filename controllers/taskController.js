const Task = require('../models/task');

exports.getAddTask = (req, res, next) => {
    res.render('add-task', { pageTitle: 'Agregar Tarea' });
};

exports.postAddTask = (req, res, next) => {
    const task = new Task(req.body.description);
    task.save();
    res.redirect('/tasks');
};

exports.getTasks = (req, res, next) => {
    const tasks = Task.fetchAll();
    res.render('task-list', { pageTitle: 'Lista de Tareas', tasks: tasks });
};

exports.postMarkComplete = (req, res, next) => {
    Task.markComplete(req.body.taskId);
    res.redirect('/tasks');
};

exports.postDeleteTask = (req, res, next) => {
    Task.delete(req.body.taskId);
    res.redirect('/tasks');
};
