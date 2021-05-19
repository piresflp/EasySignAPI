'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('palavras', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      letra_inicial: {
        type: Sequelize.STRING,
        allowNull: false
      },
      palavra: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      significado: {
        type: Sequelize.STRING,
        allowNull: false
      },
      genero: {
        type: Sequelize.STRING,
        allowNull: false
      },
      origem: {
        type: Sequelize.STRING,
        allowNull: false
      },
      endereco_gif: {
        type: Sequelize.STRING,
        allowNull: false
      },
      exemplo_portugues: {
        type: Sequelize.STRING,
        allowNull: false
      },
      exemplo_libras: {
        type: Sequelize.STRING,
        allowNull: false
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('palavras')
  }
};
