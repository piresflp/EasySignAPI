const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Palavra = require('../models/Palavra');

const connection = new Sequelize(dbConfig)

//Models.init(connection);
Palavra.init(connection);

module.exports = connection;