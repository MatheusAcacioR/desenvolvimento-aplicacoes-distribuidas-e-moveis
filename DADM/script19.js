var http = require('http');
var uc = require('upper-case');

http.createServer(
    function(req, res) {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write(uc.upperCase('desenvolvimento de aplicações web'));
        res.end();
    }
).listen(8080);

console.log('Server online!')