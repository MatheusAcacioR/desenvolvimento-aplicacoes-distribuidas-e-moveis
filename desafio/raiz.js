var http = require('http');

var numberRoot = 0;

function calcularRaiz(numberRoot) {
    number = Math.sqrt(numberRoot)
    return number
}

http.createServer(
    function(req, res) {
        res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'})

        res.write('<html>');
        res.write('<head>');
        res.write(`<script>var numberRoot = Number(prompt('Digite'));</script>`);
        res.write('<title>Aula de Node.js</title>');
        res.write('</head>');
        res.write('<body>');
        res.write('<h1>Resultado Raiz quadrada</h1>');
        res.write('<p>');
        res.write(`A raiz quadrada de ${numberRoot} é ${calcularRaiz()}`);
        res.write('</p>');
        res.write('</body>');
        res.write('</html>');

        res.end();
    }
).listen(8080);

console.log('Server online');