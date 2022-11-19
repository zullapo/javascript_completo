module.exports.teste = 'ola mundo'

// Apaga a propriedade anterior:
// module.exports = { teste2: 'ola mundo' }

// Ambas referências apontam para o mesmo objeto:
console.log(module.exports === exports)

// Porém, mudanças no exports não refletem no module:
exports = { teste3: 'ola mundo' }
console.log(module)

// Exportando função
module.exports.fn = (msg) => msg
