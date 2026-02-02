const mongoose = require('mongoose'); // Importa o mongoose

const BikesSchema = new mongoose.Schema({ // Cria uma instância de um schema para o mongoose, servindo para declarar e modelar dados
    nome: { type: String, required: true },
    aro: { type: Number, required: true },
    preco: { type: Number, required: true },
    imagem: { type: String, required: true },
    descricao: { type: String, required: true }
    
});

const BikesModel = mongoose.model('Bikes', BikesSchema); // Cria um Model do Schema instanciado

class Bikes {

}

module.exports = Bikes;