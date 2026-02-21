const mongoose = require('mongoose'); // Importa o mongoose

const BikeSchema = new mongoose.Schema({ // Cria uma instância de um schema para o mongoose, servindo para declarar e modelar dados

    // TIPOS DOS DADOS
    nome: { type: String, required: true },
    aro: { type: Number, required: true },
    preco: { type: Number, required: true },
    avista: { type: Number, required: true },
    imagem: { type: String, required: false },
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

    async cadastrar() { // CADASTRA UMA BICICLETA NOVA
        this.cleanUp(); // FUNÇÃO PARA CORTAR O CSURF E LIMPAR OS DADOS
        try {
            return this.bike = await BikeModel.create(this.body); // RECEBE OS DADOS DO FORM E CRIA NA BASE DE DADOS
        } catch(e) {
            this.errors.push('Erro ao cadastrar produtos'); 
            return console.log(e);
        }
    }

    async edit(id) { // EDITAR PRODUTOS
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

    static async buscaPorId(id) { // FILTRA BIKE POR ID
        if (typeof id !== 'string') return;
        const bike = await BikeModel.findById(id);
        return bike;
    };

    static async buscaPorAro(aro) { // FILTRA BIKE POR ARO
        const bike = await BikeModel.find({ aro }); //
        return bike;
    }

    static async buscaBikes(sort) { // FILTRA BIKES POR ORDEM CRESCENTE/DECRESCENTE
        const bikes = await BikeModel.find().sort({ criadoEm: sort }); // 1 para ordem crescente e -1 para ordem decrescente
        return bikes;
    }

    static async buscaAleatorio(qtd) { // BUSCA BIKES ALEATORIAMENTE
        const bikeRandom = await BikeModel.aggregate([{ $sample: { size: qtd } }]);
        return bikeRandom
    }

    static async delete(id) { // DELETA A BICICLETA
        if (typeof id !== 'string') return;
        const bikes = await BikeModel.findOneAndDelete({ _id: id }); // Busca pelo ID e delete da base de dados
        return bikes;
    };
}

module.exports = Bike;