// 1. Requizicao do modulo NPM Express
//Express: Otimizar a construção de aplicações web e APIs, 
//tornando-se um dos Frameworks mais populares da internet e 
//que utiliza o Node para execução do javascript como linguagem de back-end
var express = require('express');

// 2 Config. Modulo express para chamar como função
var app = express();

//3 Setando o motor de visualizacao como extensao EJS
app.set("view engine", 'ejs');

// 4. Configurando para uso como pasta estatica a public
app.use(express.static("public"));

// Bloco para uso de Rotas do projeto (Requisicao Roteador e Indicacao Caminho)

// Router Index
var indexRouter = require('./routers/indexRouter');
app.use('/', indexRouter);

// Router Contato
var contatoRouter = require('./routers/contatoRouter');
app.use('/contato', contatoRouter);


//...................................

///5. Configurando porta para inicializacao do servidor (Running 3000)
app.listen(3000, ()=>console.log('Server running on port 3000'))