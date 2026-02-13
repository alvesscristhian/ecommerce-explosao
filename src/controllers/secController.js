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

exports.produtos = async (req, res) => {
    try {
        const { aro, ordenar } = req.query;

        let bikes;

        if (aro) {
            bikes = await Bike.buscaPorAro(aro);
        } else {
            bikes = await Bike.buscaBikes(1);
        }

        if (ordenar === 'menor-preco') {
            bikes.sort((a, b) => Number(a.preco) - Number(b.preco));
        }

        if (ordenar === 'maior-preco') {
            bikes.sort((a, b) => Number(b.preco) - Number(a.preco));
        }

        res.render('produtos', {
            produtos: bikes,
            filtrosSelecionados: {
                aro
            }
        });
    } catch (e) {
        console.log(e);
        return res.render('404');
    }
};