const express = require('express'); // Importa express
const route = express.Router(); // Importa rota

const secController = require('./src/controllers/secController');
const loginController = require('./src/controllers/loginController');
const adminController = require('./src/controllers/adminController');

const { loginRequired } = require('./src/middlewares/middleware');
const uploadImagem = require('./src/middlewares/uploadImagem');

// Rotas das seções
route.get('/', secController.index);
route.get('/sobre-nos', secController.about);
route.get('/contato', secController.contato);
route.get('/produtos', secController.produtos);

// Rotas de login
route.get('/login', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login);

// Rotas de admin
route.get('/admin/dashboard', loginRequired, adminController.index);
route.get('/admin/cadastrar', loginRequired, adminController.bikes);
route.post('/admin/bike', loginRequired, uploadImagem, adminController.cadastrar);
route.get('/admin/cadastrar/:id', loginRequired, adminController.editIndex);
route.post(`/admin/edit/:id`, loginRequired, uploadImagem, adminController.edit);
route.get(`/admin/delete/:id`, loginRequired, adminController.delete);
route.get('/admin/logout', adminController.logout);


module.exports = route;