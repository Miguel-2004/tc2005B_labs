const User = require('../models/user');
const bcrypt = require('bcryptjs');

exports.postLogin = (req, res, next) => {
    const { email, password } = req.body;

    User.findByEmail(email).then(([users]) => {
        if (users.length === 0) {
            return res.redirect('/login');
        }
        const user = users[0];

        bcrypt.compare(password, user.password).then(doMatch => {
            if (doMatch) {
                // Obtener roles y permisos
                User.getUserRolesPermissions(user.id).then(([rolesPermissions]) => {
                    req.session.isLoggedIn = true;
                    req.session.user = { id: user.id, permissions: rolesPermissions };
                    return req.session.save(err => {
                        res.redirect('/tasks');
                    });
                });
            } else {
                res.redirect('/login');
            }
        });
    }).catch(err => console.log(err));
};
