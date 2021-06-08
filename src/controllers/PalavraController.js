const Palavra = require('../models/Palavra');

module.exports = {
    async consultarPorID(req, res){
        const { id } = req.params;

        const palavraDesejada = await Palavra.findByPk(id);

        if(!palavraDesejada)
            return res
                .status(404)
                .json({error: 'Palavra não encontrada.'});

        return res.json(palavraDesejada)
    },

    async consultarPorLetra(req, res){
        const palavrasDesejadas = await Palavra.findAll({
            where: {
                letra_inicial: req.body
            }
        })

        if(palavrasDesejadas.length == 0)
            return res
                .status(404)
                .json({error: 'Nenhuma palavra foi encontrada.'});

        return res.json(palavrasDesejadas)
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
        } = await Palavra.create(req.body);   

        return res.json(
            letra_inicial,
            palavra,
            significado,
            genero,
            origem,
            endereco_gif,
            exemplo_portugues,
            exemplo_libras
        )
    }
}