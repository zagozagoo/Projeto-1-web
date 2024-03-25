// Iniciando Route do Express
const express = require('express');
const route = express.Router();

// Importando os Controllers
const home = require('./src/controllers/home');
const cadastro = require('./src/controllers/cadastro');
const editar = require('./src/controllers/editar');

// Iniciando as rotas
route.get('/', home.pagInicialGet);
route.post('/', home.pagInicialPost);

route.get('/aluno', cadastro.aluno);
route.post('/insertaluno', cadastro.alunoInsert);

route.get('/sala', home.pagSala);
route.post('/sala', cadastro.salaInsert);

module.exports = route;