var fs = require('fs');

fs.open('arquivoFeio.txt', 'w', function(err, file) {
    if (err)
        throw err
});

console.log('✔Arquivo aberto com sucesso!✔');