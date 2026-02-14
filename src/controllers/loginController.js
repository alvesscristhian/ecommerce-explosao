const Login = require('../models/LoginModel');

exports.index = (req, res) => {
    res.render('login');
    return;
};

exports.register = async function (req, res) { // POST PARA REGISTRAR USUÁRIOS - ALTERAR FORM ACTION NA VIEW LOGIN
    try {
        const login = new Login(req.body);
        await login.register();
        return res.send(login.user);
    } catch (e) {
        console.log(e);
        return res.render('404');
    }
}

exports.login = async function (req, res) { // POST PARA LOGAR USUÁRIOS
    try {
        const login = new Login(req.body);
        await login.login();

        if (login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(function () {
                return res.redirect('/login');
            });
            return;
        };

        req.flash('success', 'Seu login foi bem sucedido!');
        req.session.user = login.user; // Armazena dados do usuário em uma sessão
        req.session.save(function () {
            return res.redirect('/admin/dashboard');
        });
    } catch (e) {
        console.log(e);
        return res.render('404');
    }
};