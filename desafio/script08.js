var http = require('http');
var url = require('url');

http.createServer(
    function(req, res) {
        res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});

        var args = url.parse(req.url, true).query;
        var valueOne = Number(args.valueone);
        var valueTwo = Number(args.valuetwo);
        var select = args.select;
        // console.log(valueOne);
        // console.log(valueTwo);
        // console.log(select);

        if(select == "soma") {
            result = valueOne + valueTwo;
        } else if (select == "subtração") {
            result = valueOne - valueTwo;
        } else if (select == "multiplicação") {
            result = valueOne * valueTwo;
        } else {
            result = valueOne / valueTwo;
        }

        res.write('<html>');
        res.write('<head>');
        res.write('<title>Aula de Node.js</title>');
        res.write('</head>');
        res.write('<body>');
        res.write('<h1>Resultado operação</h1>');
        res.write('<p>');
        res.write(`A ${select} entre ${valueOne} e ${valueTwo} é ${result}`);
        res.write('</p>');
        res.write('</body>');
        res.write('</html>');

        res.end();
    }
).listen(8080);

console.log('Server online');