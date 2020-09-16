var http = require('http');
var fs = require('fs');

http.createServer(
    function(req, res) {
        fs.readFile('pagina08.html', function(err, dados) {
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.write(dados);

            fs.writeFile('arquivo4.txt', dados, function(err) {
                if (err)
                    throw err;
            })

            res.end();
        })
    }
).listen(8080);

console.log('Server online')