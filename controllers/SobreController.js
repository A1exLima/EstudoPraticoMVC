// Criacao objeto Literal para armazenar as funcoes de controller de cada endereco indicado
// pelo roteador para controle.

const SobreController = {

    index: (req, res)=>{
        res.render('sobre');
    }
    
}
module.exports = SobreController;