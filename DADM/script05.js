var http = require('http');
var date = require('./data');

http.createServer(
    function(req, res) {
        res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});

        res.write('<html>');
        res.write('<head>');
        res.write('<title>Aula de Node.js</title>');
        res.write('</head>');
        res.write('<body>');
        res.write('<h1>Sejam bem-vindos</h1>');
        res.write('<p>');
        res.write(`Hioje é dia ${date.returnDay()}/${date.returnMonth()}/${date.returnYear()} e no momento são ${date.returnHours()}:${date.returnMinutes()}`);
        res.write('</p>');
        res.write('</body>');
        res.write('</html>');

        res.end();
    }
).listen(8080);

console.log('Server online');