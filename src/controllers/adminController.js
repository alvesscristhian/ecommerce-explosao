const Bikes = require('../models/BikesModel'); // Importa o Model de bikes
const cloudinary = require('../../configs/cloudinaryConfig');
const fs = require('fs');

exports.index = (req, res) => {
    return res.render('painel');
};

exports.bikes = (req, res) => {
    return res.render('cadastro-bike');
}

exports.cadastrar = async (req, res) => {
    try {
        const filePath = req.file.path;
        const result = await cloudinary.uploader.upload(filePath, {
            folder: "produtos"
        });
        fs.unlinkSync(filePath);
        req.body.imagem = result.secure_url;

        const bike = new Bikes(req.body);
        await bike.cadastrar();

        req.flash('success', 'Seu produto foi criado com sucesso!');
        req.session.save(function () {
            return res.redirect('/admin');
        });
    } catch (err) {
        console.error(err);
        req.flash('error', "Erro ao salvar produto");
        return res.redirect('/404');
    }
};