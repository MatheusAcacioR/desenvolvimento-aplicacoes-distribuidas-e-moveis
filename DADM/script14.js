var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(
    function(req, res) {
        var args = url.parse(req.url, true).query;
        var name = args.nome;
        var subname = args.sobrenome;

        var nc = `${name} ${subname} \n`;

        fs.appendFile('listaNomes.txt', nc, function(err) {
            if(err)
                throw err;
        })

        res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
        res.write(`Nome: ${name}<br>`)
        res.write(`Nome: ${subname}`)
        console.log(name, subname);
        //res.end();
    }
).listen(8080);

console.log('📡Server online!');