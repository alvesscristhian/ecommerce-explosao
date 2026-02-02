const Bikes = require('../models/BikesModel');

exports.index = (req, res) => {
    return res.render('painel');
};

exports.bikes = (req, res) => {
    return res.render('cadastro-bike');
}

exports.cadastrar = (req, res) => {
    
}