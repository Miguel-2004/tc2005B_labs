const db = require('../util/database');

module.exports = class Task {
    constructor(description) {
        this.description = description;
    }

    // Guardar tarea en la base de datos
    save() {
        return db.execute(
            'INSERT INTO tareas (descripcion) VALUES (?)',
            [this.description]
        );
    }

    // Obtener todas las tareas
    static fetchAll() {
        return db.execute('SELECT * FROM tareas');
    }

    // Obtener una tarea por ID
    static findById(id) {
        return db.execute('SELECT * FROM tareas WHERE id = ?', [id]);
    }

    // Actualizar tarea (marcar como completada)
    static update(id, completado) {
        return db.execute(
            'UPDATE tareas SET completado = ? WHERE id = ?',
            [completado, id]
        );
    }
};
