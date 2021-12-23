const PalavraUseCase = require('../useCase/PalavraUseCase')
module.exports = {
    async consultarPorID(req, res){
        const { id } = req.params;
        
        try {
           const palavra_desejada = await PalavraUseCase.procurar(id)  
           return res.json(palavra_desejada)
          
        } catch (error) {
          return res
          .status(404)
          .json({error: 'Palavra não encontrada.'});
        }
    },

    async consultarPorLetra(req, res){
        const letra  = req.body.letra_inicial.toLowerCase();

        try {
            const palavras_desejadas = PalavraUseCase.procurarTodos(letra)
            return res.json(palavras_desejadas)

        } catch (error) {
            res.status(404).json({error: error.message})    
        }
    },

    async inserir(req, res){
        const {
            letra_inicial,
            palavra,
            significado,
            genero,
            origem,
            endereco_gif,
            exemplo_portugues,
            exemplo_libras
        } = req.body;
        
        await PalavraUseCase.criar( letra_inicial,
          palavra,
          significado,
          genero,
          origem,
          endereco_gif,
          exemplo_portugues,
          exemplo_libras);

        return res.json(
            letra_inicial,
            palavra,
            significado,
            genero,
            origem,
            endereco_gif,
            exemplo_portugues,
            exemplo_libras
        );
    }
}
