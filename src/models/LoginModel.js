const mongoose = require('mongoose'); // Importa o mongoose
const bcryptjs = require('bcryptjs');

const LoginSchema = new mongoose.Schema({ // Cria uma instância de um schema para o mongoose, servindo para declarar e modelar dados
    usuario: { type: String, required: true },
    password: { type: String, required: true }
});

const LoginModel = mongoose.model('Login', LoginSchema); // Cria um Model do Schema instanciado

class Login {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    async login() { // FAZ O LOGIN DO USUÁRIO
        if (this.errors.length > 0) return;
        this.user = await LoginModel.findOne({ usuario: this.body.usuario }); // Busca no MongoDB um usuário com o mesmo nome informado no formulário especifica

        if (!this.user) {
            this.errors.push('Usuário ou senha inválida.');
            return;
        }

        if (!bcryptjs.compareSync(this.body.password, this.user.password)) { // // Compara a senha digitada com o hash da senha armazenado no MongoDB
            this.errors.push('Usuário ou senha inválida.');
            this.user = null;
            return;
        }
    }

    async register() { // REGISTRA A BICICLETA 
        this.cleanUp();
        try {
            const salt = bcryptjs.genSaltSync(); // Gera um salt (string aleatória)
            this.body.password = bcryptjs.hashSync(this.body.password, salt); // Pega a senha em texto puro e combina com o salt gerando um hash criptografado
            this.user = await LoginModel.create(this.body);
        } catch (e) {
            console.log(e);
        }

    }

    cleanUp() {
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }

        this.body = {
            usuario: this.body.usuario,
            password: this.body.password
        };
    }
}

module.exports = Login;