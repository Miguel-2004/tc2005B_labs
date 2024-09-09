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
};
