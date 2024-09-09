const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    save() {
        return bcrypt.hash(this.password, 12).then(hashedPassword => {
            return db.execute(
                'INSERT INTO users (email, password) VALUES (?, ?)',
                [this.email, hashedPassword]
            );
        });
    }

    static findByEmail(email) {
        return db.execute('SELECT * FROM users WHERE email = ?', [email]);
    }
};
