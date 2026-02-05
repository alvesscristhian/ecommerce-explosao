const Bike = require('../models/BikeModel'); // Importa o Model de bikes

exports.index = async (req, res) => {
    try {
        const bike = await Bike.buscaBikes();
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