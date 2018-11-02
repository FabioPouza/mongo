const http = require("http");
const app = require("./server/config/express");
require("./server/config/mongoose");
const testeModel = require('./server/models/testeModel');
const TesteModel = require('./server/requestModel/Teste');


http.createServer(app).listen(3000, function () {
    console.log("Servidor Iniciado");
});

app.post('/teste', (req, res) => {
    const dados = new TesteModel(req.body);
    console.log(dados);
    let teste = new testeModel(dados);
    teste.save();
    res.json('foi');

});
