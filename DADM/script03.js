var http = require('http');

var nome = "Fernanda da Costa";
var idade = 7;
var peso = 23.6;
var altura = 1.50;
var sexo = 'F';

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});

    res.write('<html>');
    res.write('<head>');
    res.write( '<title>Aula de Node.js</title>');
    res.write( '</head>');
    res.write( '<body>');
    res.write( '<h1>Dados do Paciente</h1>');
    res.write( '<p>');

    res.write(`Nome: ${nome} <br>`);
    res.write(`Idade: ${idade} <br>`);
    res.write(`Peso: ${peso} <br>`);
    res.write(`Altura: ${altura} <br>`);
    res.write(`Sexo: ${sexo} <br>`);
    
    res.write( '</p>');
    res.write( '</body>');
    res.write( '</html>');

    res.end();
}).listen(8080);

console.log('Servidor iniciado na porta 8080. Ctrl + C para encerrar.');