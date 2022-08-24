// Criacao objeto Literal para armazenar as funcoes de controller de cada endereco indicado
// pelo roteador para controle.

const ContatoController = {

    index: (req, res)=>{
        res.render('contato.ejs');
    }
}

module.exports = ContatoController;