const mongoose = require('mongoose'); // Importa o mongoose

const ProdutoSchema = new mongoose.Schema({ // Cria uma instância de um schema para o mongoose, servindo para declarar e modelar dados
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    
});

const ProdutoModel = mongoose.model('Produto', ProdutoSchema); // Cria um Model do Schema instanciado

class Produto {

}

module.exports = Produto;