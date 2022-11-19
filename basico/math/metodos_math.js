const checkNodeVersion = require('@adonisjs/cli/src/Services/check-node-version')

/* Métodos min e max
Retornam menor e maior número de uma sequência.
*/
let arr = [1, 5, 4, 9, 3]

console.log('Sequência:', arr)
console.log('Valor mínimo:', Math.min(arr))
console.log('Valor mínimo:', Math.min(arr))

/* Método pow
Calcula a exponenciação (potência).
*/
console.log(Math.pow(2, 3))
// Não é cross-browser
console.log(2 ** 3)

/* Métodos sqrt e cbrt
Calculam a raíz quadrada e cúbica.
*/
console.log(Math.sqrt(2))
console.log(Math.cbrt(7))

/* Métodos round, floor e ceil
Round: Arrendonda para próximo número, quando a parte decimal é maior ou igual a 0.5.
Floor: Arrendonda para número anterior.
Ceil: Arrendonda para próximo número.
*/
console.log(Math.round(5.5))
console.log(Math.floor(-5.9))
console.log(Math.ceil(0.4))

/* Método random
Retorna um número decimal aleatório entre 0 e 1.
*/
console.log(Math.random())
console.log(Math.random() * 10)
