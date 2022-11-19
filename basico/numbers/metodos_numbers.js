/*Métodos toPrecision, toFixed e toExponential

toPrecision: limita os dígitos de um número e arrendonda quando preciso
toFixed: limita as casas decimais de um número
toExponential: converte o número em notação científica 
*/

let n = 10.24561
console.log(n.toPrecision(5))
console.log(n.toFixed(2))
console.log(n.toExponential())

/* Métodos toString e toLocaleString

toString: converte número em string, e pode converter para outra base númerica.
toLocaleString: formata número conforme o padrão do locale (ex.: pt-BR)
*/

console.log(n.toString())

// Base binária
console.log((1).toString(2))
console.log((2).toString(2))
console.log((3).toString(2))

// Base hexadecimal
console.log((13).toString(15))
console.log((14).toString(15))
console.log((15).toString(15))

// Testa no browser:
console.log(n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
console.log(n.toLocaleString('pt-PT', { style: 'currency', currency: 'EUR' }))

/* Propriedades MIN_VALUE e MAX_VALUE 

São acessadas através do objeto Number, representam o máximo e o mínimo número
que um inteiro pode representar.
*/
console.log('Valor mínimo:', Number.MIN_VALUE)
console.log('Valor máximo:', Number.MAX_VALUE)

/* Método isNaN()

NaN representa um valor que não é um número, ou seja, uma string ou qualquer
valor que não pode ser convertido para número.

Esse método é acessado de forma global, o que no navegador é feito implicitamente
através do objeto window.
*/
console.log(isNaN('a125.3'))

// Válido, pois a conversão de número ignora a parte que não pode ser convertida no final.
console.log(isNaN('124.6b'))
