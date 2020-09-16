var fs = require('fs');

fs.rename('arquivoNovo.txt', 'arquivoNovissimo.txt', function(err) {
    if (err) {
        throw err;
    }
});

console.log("Executado com sucesso!")