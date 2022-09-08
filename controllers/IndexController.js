const dataBasePizzas = require('../database/database_pizzas.json');

// Criacao objeto Literal para armazenar as funcoes de controller de cada endereco indicado pelo roteador para controle.
const IndexController = {

    index: (req, res)=>{
        res.render('index.ejs', {dataBasePizzas});
    },

    search: (req, res)=>{

        //Levanta o trecho que está sendo buscado (req.query.find)
        let termoBuscado = req.query.find;

        //Filtra as pizzas para obter somente as pizzas com esse trecho levando em consideracao letras Maiusculas e Minusculas
        let pizzasFiltrada = dataBasePizzas.filter(pizza => pizza.nome.toLowerCase().includes(termoBuscado.toLowerCase()));

        //retorna a view index.ejs, passando para ela somente as pizzas filtradas
        res.render('index.ejs', {dataBasePizzas: pizzasFiltrada});
    },

    viewPizzas: (req, res)=>{

        // Armazena o Id da Pizza Selecionada
        let id = req.params.id

        // Localiza no banco de dados a Pizza selecionada atraves do seu ID
        let pizzaSelecionada =  dataBasePizzas.find(pizzas => pizzas.id == id);

        //Rederiza a View da Pizza encontrada para o cliente
        res.render('viewpizzas.ejs', {dataBasePizzas: pizzaSelecionada});
    }
}

module.exports = IndexController;