const { findAll } = require("../models/Palavra");
const Palavra = require("../models/Palavra");

module.exports = {
    async procurar(id) {
        const palavra_desejada = await Palavra.findByPk(id);
        if(!palavra_desejada){
          throw new Error("'Palavra não encontrada.")
        }

        return palavra_desejada;
    },

    async procurarTodos(letra) {
        const letras_alfabeto = [
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
          "g",
          "h",
          "i",
          "j",
          "k",
          "l",
          "m",
          "n",
          "o",
          "p",
          "q",
          "r",
          "s",
          "t",
          "u",
          "v",
          "w",
          "x",
          "y",
          "z",
        ];

        if (!letras_alfabeto.includes(letra)) {
           throw new Error("Insira uma letra valida");
        } else {
            const palavras_desejadas = await Palavra.findAll({
                where: {
                  letra_inicial: letra,
                },
                attributes: [
                  "palavra",
                  "significado",
                  "genero",
                  "origem",
                  "endereco_gif",
                  "exemplo_portugues",
                  "exemplo_libras",
                ],
            });
            if (palavras_desejadas.length == 0) {
                throw new Error("Nenhuma palavra foi encontrada.");
            }
            return palavras_desejadas;
        }
    },

    async criar(
        letra_inicial,
        palavra,
        significado,
        genero,
        origem,
        endereco_gif,
        exemplo_portugues,
        exemplo_libras
    ) {
        await Palavra.create(
            letra_inicial,
            palavra,
            significado,
            genero,
            origem,
            endereco_gif,
            exemplo_portugues,
            exemplo_libras
        );
    },
};
