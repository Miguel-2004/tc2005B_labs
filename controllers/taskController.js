const Task = require('../models/task');

exports.getTasks = (req, res, next) => {
    Task.fetchAll()
        .then(([rows]) => {
            res.render('task-list', { pageTitle: 'Lista de Tareas', tasks: rows });
        })
        .catch(err => console.log(err));
};

exports.postAddTask = (req, res, next) => {
    const newTask = new Task(req.body.description);
    newTask.save()
        .then(() => {
            res.redirect('/tasks');
        })
        .catch(err => console.log(err));
};
