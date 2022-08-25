// Criacao objeto Literal para armazenar as funcoes de controller de cada endereco indicado
// pelo roteador para controle.

const DepoimentosController = {

    index: (req, res)=>{
        res.render('depoimentos');
    }
    
}
module.exports = DepoimentosController;