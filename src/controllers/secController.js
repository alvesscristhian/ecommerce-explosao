const Bike = require('../models/BikeModel'); // Importa o Model de bikes

// RENDERIZA TODAS AS SEÇÕES DA VIEW

exports.index = async (req, res) => { // CONTROLLER HOME
    try {
        const { aro } = req.query; // RECEBE O ARO SELECIONADO PELA QUERY PARAMS DA URL
        let bike;

        if (aro) { // CHECA SE FOI SELECIONADO ALGUM FILTRO DE ARO
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

exports.produtos = async (req, res) => { // CONTROLLER /PRODUTOS
    try {
        const { aro, ordenar } = req.query; // RECEBE DO REQ.QUERY OS VALORES DO ARO/ORDENAR

        let bikes;

        if (aro) { // CHECA SE FOI SELECIONADO ALGUM FILTRO DE ARO
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
            filtrosSelecionados: { aro, ordenar }
        });
    } catch (e) {
        console.log(e);
        return res.render('404');
    }
};

exports.bicicletas = async (req, res) => {
    try {
        const bike = await Bike.buscaPorId(req.params.id);
        const bikes = await Bike.buscaBikes(-1);
        
        res.render('bike-info', { bike, bikes })
    }
    catch(e) {
        console.log(e);
    }
};