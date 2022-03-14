const db = require('./db.js');

const Alunos = db.conn.define('alunos', {
    nome: {
        type: db.Sequelize.STRING
    },
    cpf: {
        type: db.Sequelize.STRING
    }
});

//Cria uma tabela toda vez que é executada
Alunos.sync({force: true})

module.exports = Alunos;