const fs = require('fs')
const usuarios = require('./files/dados/db.json')


fs.readFile('./files/dados/db.json', 'UTF-8', (err, usuarios) => {
    if (err) {
        throw err
    }
    const usuariosObj = JSON.parse(usuarios)
    console.log(usuariosObj[0].nome)
})

console.log(usuarios[0].email)
