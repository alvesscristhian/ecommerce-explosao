const Produto = require('../models/ProdutoModel');

exports.index = (req, res) => {
    return res.render('painel');
};