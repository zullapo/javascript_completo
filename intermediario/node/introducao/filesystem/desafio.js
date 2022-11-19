const fs = require('fs')

const pessoas = require('./files/dados/pessoas.json')

const getFlagValue = require('./getFlagValue')

const pessoaObj = ['name', 'lastname'].reduce((ac, vlr) => {
    ac[vlr] = getFlagValue('--' + vlr)
    return ac
}, {})

pessoas.push(pessoaObj)

fs.writeFile('./files/dados/pessoas.json', JSON.stringify(pessoas), (err) => {
    if (err) {
        throw err
    }
})
