const db = require('../util/database');

module.exports = class User {
    constructor(id, email, password) {
        this.id = id;
        this.email = email;
        this.password = password;
    }

    static findByEmail(email) {
        return db.execute('SELECT * FROM users WHERE email = ?', [email]);
    }

    static getUserRolesPermissions(userId) {
        return db.execute(`
            SELECT r.name as role, p.name as permission 
            FROM user_roles ur
            JOIN roles r ON ur.role_id = r.id
            JOIN role_permissions rp ON rp.role_id = r.id
            JOIN permissions p ON rp.permission_id = p.id
            WHERE ur.user_id = ?`, [userId]);
    }
};
