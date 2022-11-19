const fs = require('fs')

const teste = `
# Lista

* Item 1
* Item 2
* Item 3
`.trim()

fs.writeFile('./files/teste.md', teste, (err) => {
    if (err) {
        throw err
    }
    console.log('arquivo teste.md criado com sucesso')
})

console.log('----------\n')

const users = [
    { id: 1, nome: 'Jose', email: 'jose.daniel@testeti.com' },
    { id: 2, nome: 'Pedro', email: 'pe.soares@gmail.com' },
    { id: 3, nome: 'Lucas', email: 'lccardoso@gmail.com' }
]

if (!fs.existsSync('./files/dados')) {
    fs.mkdir('./files/dados', (err) => {
        if (err) {
            throw err
        }
        console.log('diretorio dados criado com sucesso')
    })
}
fs.writeFile('./files/dados/db.json', JSON.stringify(users), (err) => {
    if (err) {
        throw err
    }
    console.log('arquivo db.json criado com sucesso')
})

