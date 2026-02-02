const express = require('express'); // Importa express
const route = express.Router(); // Importa rota

const secController = require('./src/controllers/secController');
const loginController = require('./src/controllers/loginController');
const adminController = require('./src/controllers/adminController');

const { loginRequired } = require('./src/middlewares/middleware');

// Rotas das seções
route.get('/', secController.index);
route.get('/sobre-nos', secController.about);
route.get('/contato', secController.contato);

// Rotas de login
route.get('/login', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login);

// Rotas de admin
route.get('/admin', loginRequired, adminController.index);
route.get('/admin/cadastrar', loginRequired, adminController.bikes);


module.exports = route;