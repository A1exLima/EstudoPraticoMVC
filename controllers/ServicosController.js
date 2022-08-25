// Criacao objeto Literal para armazenar as funcoes de controller de cada endereco indicado
// pelo roteador para controle.

const ServicosController = {

    index: (req, res)=>{
        res.render('servicos');
    }
    
}
module.exports = ServicosController;