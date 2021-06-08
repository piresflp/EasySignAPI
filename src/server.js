const express = require('express');
const palavra = require('./routes/PalavraRotas');

require('./database');

const app = express();

app.use(express.json());
app.use(palavra);

app.listen(3333, function () {
    console.log('API ligada!');
});