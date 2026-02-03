const mongoose = require('mongoose'); // Importa o mongoose

const BikesSchema = new mongoose.Schema({ // Cria uma instância de um schema para o mongoose, servindo para declarar e modelar dados
    nome: { type: String, required: true },
    aro: { type: Number, required: true },
    preco: { type: Number, required: true },
    avista: { type: Number, required: true },
    imagem: { type: String, required: true },
    descricao: { type: String, required: true }
});

const BikesModel = mongoose.model('Bikes', BikesSchema); // Cria um Model do Schema instanciado

class Bikes {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.bike = null;
    }

    async cadastrar() {
        this.cleanUp();
        try {
            this.bike = await BikesModel.create(this.body);
        } catch(e) {
            console.log(e);
        }
    }

    cleanUp() {
        this.body = {
            nome: this.body.nome,
            aro: this.body.aro,
            preco: this.body.preco,
            avista: this.body.avista,
            imagem: this.body.imagem,
            descricao: this.body.descricao
        };
    }
}

module.exports = Bikes;