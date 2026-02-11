const Bike = require('../models/BikeModel'); // Importa o Model de bikes

exports.index = async (req, res) => {
    try {
        const { aro } = req.query; // Extrai o aro selecionado do req.query
        let bike;

        if (aro) {
            bike = await Bike.buscaPorAro(aro);
        } else {
            bike = await Bike.buscaBikes(1);
        }

        res.render('index', { bike });
    } catch (e) {
        console.log(e);
        return res.render('404');
    }
};

exports.about = (req, res) => {
    return res.render('sobre');
};

exports.contato = (req, res) => {
    return res.render('contato');
};