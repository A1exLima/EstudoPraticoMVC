// 1. Requizicao do modulo NPM Express
var express = require('express');

// 2 Config. Modulo express para chamar a funcao roteador
var router = express.Router();

// Bloco para uso de Rotas do projeto (Requisicao Controller e Indicacao Caminho)

//Controller Index CONTATO
var ContatoController = require('..//controllers/ContatoController');
router.get('/', ContatoController.index);


//...................................

//3. Exportando o Modulo de roteamento para uso nas funcoes de Controller
module.exports = router;