const fs = require('fs')

const pessoaObj = { name: 'Pamela', lastname: 'Soares' }

fs.writeFile('./files/dados/pessoas.json', JSON.stringify(pessoaObj), (err) => {
    if (err) {
        throw err
    }
})
