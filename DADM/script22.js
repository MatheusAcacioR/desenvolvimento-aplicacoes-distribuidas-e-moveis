var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(
    function(req, res) {
        if(req.url == '/script22') {
            var form = new formidable.IncomingForm();

            form.parse(req, function(err, fields, files) {
                var nomeAntigo = files.arquivo.path;
                var nomeNovo = `C:/Users/Matheus/Desktop/arquivos_Matheus/meus-repositorios-github/desenvolvimento-aplicacoes-distribuidas-e-moveis/DADM/${files.arquivo.name}`

                fs.rename(nomeAntigo, nomeNovo,
                    function(err) {
                        if (err)
                            throw err;
                    }
                );

                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'});
                
                res.write('<h1>Envio de Arquivo</h1>')
                res.write('<p>Enviado com sucesso</p>')
                res.write(`${nomeAntigo}<br>${nomeNovo}`)

                res.end()
            })

        } else {
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'});
    
            res.write('<h1>Upload de arquivos</h1>')
            res.write('<form action="script22" method="post" enctype="multipart/form-data">')
            res.write('<fieldset>')
            res.write('<legend>Envio de Arquivo</legend>')
            res.write('<p><input type="file" name="arquivo"></p>')
            res.write('<p><input type="submit" value="Enviar"></p>')
            res.write('</fieldset>')
            res.write('</form>')
    
            res.end();
        }

    }
).listen(8080);

console.log('📡Server online!');