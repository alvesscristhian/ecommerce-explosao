const Bikes = require('../models/BikesModel');

exports.index = (req, res) => {
    return res.render('painel');
};

exports.cadastrar = (req, res) => {
    return res.render('cadastro-bike');
}