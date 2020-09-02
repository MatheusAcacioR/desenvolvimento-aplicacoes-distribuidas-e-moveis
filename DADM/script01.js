var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
    res.write('Desenvolvimento de Aplicações distribuidas e móveis');
    res.end();
}).listen(8080);

console.log('Servidor iniciado na porta 8080. Ctrl + C para encerrar.');