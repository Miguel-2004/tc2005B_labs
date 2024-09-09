const User = require('../models/user');
const bcrypt = require('bcryptjs');

exports.getSignup = (req, res, next) => {
    res.render('signup', { pageTitle: 'Registrarse', csrfToken: req.csrfToken() });
};

exports.postSignup = (req, res, next) => {
    const { email, password } = req.body;
    User.findByEmail(email).then(([users]) => {
        if (users.length > 0) {
            return res.redirect('/signup');
        }
        const user = new User(email, password);
        return user.save().then(() => {
            res.redirect('/login');
        });
    }).catch(err => console.log(err));
};

exports.getLogin = (req, res, next) => {
    res.render('login', { pageTitle: 'Iniciar Sesión', csrfToken: req.csrfToken() });
};

exports.postLogin = (req, res, next) => {
    const { email, password } = req.body;
    User.findByEmail(email).then(([users]) => {
        if (users.length === 0) {
            return res.redirect('/login');
        }
        const user = users[0];
        bcrypt.compare(password, user.password).then(doMatch => {
            if (doMatch) {
                req.session.isLoggedIn = true;
                req.session.user = user;
                return req.session.save(err => {
                    res.redirect('/tasks');
                });
            }
            res.redirect('/login');
        }).catch(err => console.log(err));
    }).catch(err => console.log(err));
};

exports.postLogout = (req, res, next) => {
    req.session.destroy(err => {
        res.redirect('/login');
    });
};
