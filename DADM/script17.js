var http = require('http');
var url = require('url');
var date = require('./data');

var end = `http://localhost8080/data.html?dia=${date.returnDay()}&mes=${date.returnMonth()}&ano=${date.returnYear()}`;
var dados = url.parse(end, true);
var data = url.parse(end, true).query;

http.createServer(
    function(req, res) {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

        res.write('<h1>Ddaos do endereço</h1>');
        res.write(`Host: ${dados.host} <br>`);
        res.write(`Caminho: ${dados.pathname} <br>`);
        res.write(`Argumentos: ${dados.search} <br>`);

        res.write('<h1>Ddaos do endereço</h1>');
        res.write(`Dia: ${data.dia} <br>`);
        res.write(`Mes: ${data.mes} <br>`);
        res.write(`Ano: ${data.ano} <br>`);

        res.end();
    }
).listen(8080);

console.log('📡Server online');