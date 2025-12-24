const express = require('express'); // Importa express
const route = express.Router(); // Importa rota
const homeController = require('./src/controllers/homeController');

// Rotas da home
route.get('/', homeController.paginaInicial)
route.post('/', homeController.trataPost);

// Rotas de contato

module.exports = route;