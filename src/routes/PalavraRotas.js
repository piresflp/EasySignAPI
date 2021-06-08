const express = require('express');
const PalavraController = require('../controllers/PalavraController');

const routes = express.Router();

routes.get('/palavras/:id', PalavraController.consultarPorID);
routes.get('/palavras', PalavraController.consultarPorLetra);

module.exports = routes;