var http = require('http');
var url = require('url');

http.createServer(
    function(req, res) {
        res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});

        var args = url.parse(req.url, true).query;
        var radio = Number(args.radio) / 10;
        var height = Number(args.height) / 10;
        var volume = Math.PI * Math.pow(radio, 2) * height;

        res.write('<html>');
        res.write('<head>');
        res.write('<title>Aula de Node.js</title>');
        res.write('</head>');
        res.write('<body>');
        res.write('<h1>Resultado operação</h1>');
        res.write('<p>');
        res.write(`O volume de um sólido que possui raio medindo ${radio}cm e altura medindo ${height}cm é ${volume.toFixed(2)}cm³`);
        res.write('</p>');
        res.write('</body>');
        res.write('</html>');

        res.end();
    }
).listen(8080);

console.log('Server online');