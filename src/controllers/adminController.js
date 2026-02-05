const Bike = require('../models/BikeModel'); // Importa o Model de bikes
const cloudinary = require('../../configs/cloudinaryConfig');
const fs = require('fs');

exports.index = async (req, res) => {
    try {
        const bikes = await Bike.buscaBikes();
        res.render('dashboard', { bikes });
    } catch (e) {
        console.log(e);
        return res.render('404');
    }
    
};

exports.bikes = (req, res) => {
    res.render('cadastro-bike', {
        bike: {}
    });
}

exports.cadastrar = async (req, res) => {
    try {
        if (!req.file) {
            req.flash('errors', 'Imagem não enviada');
            return res.redirect('/admin/dashboard');
        };

        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: "produtos"
        });
        req.body.imagem = result.secure_url;

        fs.unlinkSync(req.file.path);

        const bike = new Bike(req.body);
        await bike.cadastrar();

        req.flash('success', 'Seu produto foi criado com sucesso!');
        req.session.save(function () {
            return res.redirect(`/admin/dashboard`);
        });
    } catch (err) {
        console.error(err);
        req.flash('errors', "Erro ao salvar produto");
        return res.render('404');
    }
};

exports.editIndex = async function (req, res) {
    if (!req.params.id) return res.render('404');
    const bike = await Bike.buscaPorId(req.params.id);
    if (!bike) return res.render('404');
    res.render('cadastro-bike', { bike });
};

exports.edit = async function (req, res) {
    try {
        if (!req.params.id) return res.render('404');
        const bike = new Bike(req.body);
        await bike.edit(req.params.id);

        if (bike.errors.length > 0) {
            req.flash('errors', bike.errors);
            req.session.save(() => res.redirect(`/admin/cadastrar/${req.params.id}`));
            return;
        }

        req.flash('success', 'Produto editado com sucesso!');
        req.session.save(() => {
            res.redirect(`/admin/cadastrar/${bike.bike._id}`);
            return;
        });
        return;
    } catch (e) {
        console.log(e);
        return res.render('404');
    }
}

exports.delete = async function (req, res) {
    try {
        if (!req.params.id) return res.render('404');

        const bike = await Bike.delete(req.params.id);
        if (!bike) return res.render('404');

        req.flash('success', 'Produto deletado com sucesso!');
        req.session.save(() => res.redirect('/admin/dashboard'));
        return;
    } catch (e) {
        console.log(e);
        return res.render('404');
    }
}

exports.logout = function(req, res) {
    req.session.destroy(); // Destruir a sessão do usuário no servidor para logouts
    res.redirect('/');
}