const fs = require('fs')

const readme = fs.readFileSync('./files/README.md', 'UTF-8')
console.log(readme)

console.log('---------------\n')

fs.readFile('./files/dados.json', 'UTF-8', (err, dados) => {
    if (err) {
        throw err
    }
    const dadosObj = JSON.parse(dados)
    console.log(dadosObj)
})

console.log('---------------\n')

/* Buffer

Tipo de dados para representar arquivos binários
*/
fs.readFile('./files/banner.jpg', (err, buffer) => {
    if (err) {
        throw err
    }
    console.log(buffer)
})

// SVG apresenta tags internas
fs.readFile('./files/_ionicons_svg.svg', 'UTF-8', (err, svgText) => {
    if (err) {
        throw err
    }
    console.log(svgText)
})

// Todo arquivo sem formatação é binário
fs.readFile('./files/README.md', (err, buffer) => {
    if (err) {
        throw err
    }
    console.log(buffer)
})