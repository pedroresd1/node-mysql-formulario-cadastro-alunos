const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Bem vindo ao Cadastro de Alunos')
});

app.listen(8080);