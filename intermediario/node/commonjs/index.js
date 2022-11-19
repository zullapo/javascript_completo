const fs = require('fs') // biblioteca nativa node
const emoji = require('node-emoji') // biblioteca de terceiros
const mod1 = require('./modules/mod1') // modulo criado

// fs.writeFile('teste.txt', 'ola mundo', (err) => {
//     if (err) throw err
//     console.log('salvo', emoji.get('white_check_mark'))
// })

console.log(mod1.fn('ola mundo'))
