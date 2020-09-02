var http = require('http');
var myModule = require('./MyModule');

http.createServer(
    function(req, res) {
        res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
        res.write(`A data e hora atuias são ${myModule.returnDate()}`);
        res.end();
    }
).listen(8080);

console.log('Server online');