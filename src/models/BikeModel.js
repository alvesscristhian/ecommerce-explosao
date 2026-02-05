const mongoose = require('mongoose'); // Importa o mongoose

const BikeSchema = new mongoose.Schema({ // Cria uma instância de um schema para o mongoose, servindo para declarar e modelar dados
    nome: { type: String, required: true },
    aro: { type: Number, required: true },
    preco: { type: Number, required: true },
    avista: { type: Number, required: true },
    imagem: { type: String, required: true },
    descricao: { type: String, required: true },
    criadoEm: { type: Date, default: Date.now },
});

const BikeModel = mongoose.model('Bike', BikeSchema); // Cria um Model do Schema instanciado

class Bike {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.bike = null;
    }

    async cadastrar() {
        this.cleanUp();
        try {
            this.bike = await BikeModel.create(this.body);
        } catch(e) {
            console.log(e);
        }
    }

    async edit(id) {
        if (typeof id !== 'string') return;
        if (this.errors.length > 0) return;
        this.bike = await BikeModel.findByIdAndUpdate(id, this.body, { new: true }); // Faz uma busca pelo ID e atualiza os dados do body
    };

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

    static async buscaPorId(id) {
        if (typeof id !== 'string') return;
        const bike = await BikeModel.findById(id);
        return bike;
    };

    static async buscaBikes() {
        const bikes = await BikeModel.find().sort({ criadoEm: -1 }); // 1 para ordem crescente e -1 para ordem decrescente
        return bikes;
    }

    static async delete(id) {
        if (typeof id !== 'string') return;
        const bikes = await BikeModel.findOneAndDelete({ _id: id }); // Busca pelo ID e delete da base de dados
        return bikes;
    };
}

module.exports = Bike;