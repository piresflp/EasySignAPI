const Palavra = require('../models/Palavra');

module.exports = {
    async consultarPorID(req, res){
        const { id } = req.params;

        const palavra_desejada = await Palavra.findByPk(id);

        if(!palavra_desejada)
            return res
                .status(404)
                .json({error: 'Palavra não encontrada.'});

        return res.json(palavra_desejada)
    },

    async consultarPorLetra(req, res){
        letra  = req.body.letra_inicial.toLowerCase();
        letras_alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
        'n','o','p','q','r','s','t','u','v','w','x','y','z'];

        if(!letras_alfabeto.includes(letra))
            return res
                .status(404)
                .json({error: 'Insira uma letra valida!'});

        const palavras_desejadas = await Palavra.findAll({
            where: {
                letra_inicial: letra                               
            },
            attributes: ['palavra', 'significado', 'genero', 'origem', 'endereco_gif', 'exemplo_portugues', 'exemplo_libras'],
            
        });

        if(palavras_desejadas.length == 0)
            return res
                .status(404)
                .json({error: 'Nenhuma palavra foi encontrada.'});

        return res.json(palavras_desejadas)
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