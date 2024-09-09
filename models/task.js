const tasks = [];

module.exports = class Task {
    constructor(description) {
        this.id = Math.random().toString();
        this.description = description;
        this.completed = false;
    }

    save() {
        tasks.push(this);
    }

    static fetchAll() {
        return tasks;
    }

    static markComplete(taskId) {
        const task = tasks.find(t => t.id === taskId);
        if (task) {
            task.completed = true;
        }
    }

    static delete(taskId) {
        const index = tasks.findIndex(t => t.id === taskId);
        if (index > -1) {
            tasks.splice(index, 1);
        }
    }
};
