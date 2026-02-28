exports.middlewareGlobal = (req, res, next) => { // MIDDLEWARES GLOBAIS
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    res.locals.user = req.session.user;
    next(); // Passa para próxima função
};

exports.sendAllCsurf = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken(); // Cria token e envia para views local
    next(); 
};

exports.checkCsurfError = (err, req, res, next) => {
    if (err.code === 'EEBADCSRFTOKEN') { // CHECA SE HOUVE ERROS COM O CSURF
        return res.status(403).send('Token CSRF inválido'); // Renderiza erro na tela e intercepta
    }

    next();
};

exports.loginRequired = (req, res, next) => {
    if (!req.session.user) { // Se o usuario não tiver uma sessão ativa não roda
        req.session.save(() => {
            res.render('404');
            return;
        });
        return;
    }
    next();
};