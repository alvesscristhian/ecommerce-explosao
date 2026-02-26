const Bike = require('../models/BikeModel');
const cloudinary = require('../../configs/cloudinaryConfig');
const fs = require('fs');

exports.index = async (req, res) => { // CONTROLLER PARA O DASHBOARD
    try {
        const bikes = await Bike.buscaBikes(-1); // BUSCA AS BIKES EM ORDEM DECRESCENTE
        return res.render('dashboard', { bikes }); // ENVIA COMO VÁRIAVEL TODAS AS BIKES DA DATABASE
    } catch (e) {
        console.log(e);
        return res.render('404');
    }

};

exports.bikes = (req, res) => { // CONTROLLER PARA A VIEW DE CADASTRO
    return res.render('cadastro-bike', {
        bike: {} // ENVIA UM FORMULÁRIO VAZIO PARA EDITAR USANDO A MESMA VIEW
    });
}

exports.cadastrar = async (req, res) => { // CONTROLLER PARA POSTAR OS DADOS DO FORMULÁRIO
    try {
        if (!req.files || req.files.length === 0) { // CHECA SE O MULTER RECEBEU A IMAGEM
            req.flash('errors', 'Imagem não enviada');
            return res.redirect('/admin/dashboard');
        };

        const imagensUrls = []; // Cria um array com as urls das imagens

        for (const file of req.files) { // Faz um for em todos os arquivos enviados
            const result = await cloudinary.uploader.upload(file.path, {
                transformation: [
                    { width: 1200, height: 1200, crop: "limit", quality: "auto" }
                ],
                folder: "produtos"
            });

            imagensUrls.push(result.secure_url); // Envia a imagem para o array

            fs.unlinkSync(file.path);
        }

        req.body.imagens = imagensUrls;

        const bike = new Bike(req.body);
        await bike.cadastrar();

        req.flash('success', 'Seu produto foi criado com sucesso!');
        req.session.save(() => {
            return res.redirect(`/admin/dashboard`);
        });

    } catch (e) {
        console.error(e);
        req.flash('errors', "Erro ao salvar produto");
        return res.redirect(`/admin/cadastrar`);
    }
};

exports.editIndex = async function (req, res) { // GET DO FORM DE EDIÇÃO
    try {
        if (!req.params.id) return res.render('404');
        const bike = await Bike.buscaPorId(req.params.id);
        if (!bike) return res.render('404');
        return res.render('cadastro-bike', { bike });
    } catch (e) {
        console.log(e);
        return res.render('404');
    }

};

exports.edit = async function (req, res) { // POST DO FORM DE EDIÇÃO
    try {
        if (!req.params.id) return res.render('404');
        const bike = new Bike(req.body);
        await bike.edit(req.params.id); // EDITA A BICICLETA

        if (bike.errors.length > 0) {
            req.flash('errors', bike.errors);
            req.session.save(() => res.redirect(`/admin/cadastrar/${req.params.id}`));
            return;
        }

        req.flash('success', 'Produto editado com sucesso!');
        req.session.save(() => {
            res.redirect(`/admin/dashboard`);
            return;
        });
        return;
    } catch (e) {
        console.log(e);
        return res.render('404');
    }
}

exports.delete = async function (req, res) { // DELETE DO PRODUTO
    try {
        if (!req.params.id) return res.render('404');

        const bike = await Bike.delete(req.params.id); // DELETA A BICICLETA
        if (!bike) return res.render('404');

        req.flash('success', 'Produto deletado com sucesso!');
        req.session.save(() => res.redirect('/admin/dashboard'));
        return;
    } catch (e) {
        console.log(e);
        return res.render('404');
    }
}

exports.logout = function (req, res) { // LOGOUT DA SESSÃO
    req.session.destroy(); // Destruir a sessão do usuário no servidor para logouts
    return res.redirect('/');
}