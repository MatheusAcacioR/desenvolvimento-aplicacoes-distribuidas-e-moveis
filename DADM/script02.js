var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});

    res.write('<html>');
    res.write('<head>');
    res.write( '<title>Aula de Node.js</title>');
    res.write( '</head>');
    res.write( '<body>');
    res.write( '<h1>Desenvolvimento de Aplicações web</h1>');
    res.write( '<p>Aprender programação é construir o futuro</p>');
    res.write( '</body>');
    res.write( '</html>');

    res.end();
}).listen(8080);

console.log('Servidor iniciado na porta 8080. Ctrl + C para encerrar.');