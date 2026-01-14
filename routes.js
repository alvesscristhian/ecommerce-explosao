const express = require('express'); // Importa express
const route = express.Router(); // Importa rota

const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');

// Rotas da home
route.get('/', homeController.paginaInicial);
route.get('/login', loginController.paginaLogin);


module.exports = route;