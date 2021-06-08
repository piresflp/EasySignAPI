const { Model, DataTypes } = require('sequelize');

class Palavra extends Model {
    static init(sequelize) {
        super.init({
            letra_inicial: DataTypes.STRING,
            palavra: DataTypes.STRING,
            significado: DataTypes.STRING,
            genero: DataTypes.STRING,
            origem: DataTypes.STRING,
            endereco_gif: DataTypes.STRING,
            exemplo_portugues: DataTypes.STRING,
            exemplo_libras: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Palavra;