const express = require('express');
const sequelize = require('sequelize');
const { engine } = require('express-handlebars');
const app = express();

//Handlebars
app.engine('handlebars', engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


//Routers
app.get('/', (req, res) => {
    res.send('Bem vindo ao Cadastro de Alunos');
});

app.get('/cad-alunos', (req, res) => {
    res.render("cad-alunos");
});

app.get('/list-alunos', (req, res) => {
    res.render("list-alunos");
});

app.listen(8080);