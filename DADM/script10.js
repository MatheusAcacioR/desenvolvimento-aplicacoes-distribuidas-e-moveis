var fs = require('fs');

fs.writeFile('arquivo02.txt', 'Hello World!', function(err) {
    if (err) {
        throw err;
    }
})

console.log('Arquivo gravado com sucesso!');