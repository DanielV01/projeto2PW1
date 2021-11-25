const db = require('./db');

const Aluno = db.sequelize.define('tabela_aluno',{
    nome: {
        type: db.Sequelize.STRING
    },
    sobreNome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    profissao: {
        type: db.Sequelize.STRING
    },
    idade: {
        type: db.Sequelize.INTEGER
    }
})

//Aluno.sync({force: true});
module.exports = Aluno;