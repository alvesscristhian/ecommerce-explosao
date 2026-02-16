const upload = require('../../configs/multer'); // CRIA E EXPORTA O MIDDLEWARE DE UPLOAD DO MULTER

module.exports = upload.single('imagem');