// Métodos regex para RegExp

/* test

Testa expressão com string, retornando verdadeiro ou falso.

*/

const cepRegex = /^\d{5}-\d{3}$/

console.log(cepRegex.test('45632-210'))
console.log(cepRegex.test('23145-30'))

/* exec

Caso houver padrões na string testada, função irá retornar uma array com suas informações
detalhadas, senão null.

Se flag global for incluída, a função exec irá iterar sobre cada padrão encontrado e
armazenar o último índice do padrão encontrado na expressão, para que outras iterações
sejam feitas.
*/

console.log(cepRegex.exec('42312-101'))

let placaRegex = /\w{3}-?\d{4}/g
const placas = 'abc-1234 abe-3564 abd-3268'

let placaEncontrada = placaRegex.exec(placas)

while (placaEncontrada) {
    console.log(placaEncontrada)
    placaEncontrada = placaRegex.exec(placas)
}

// Métodos regex para string

/* search

Retorna o índice do primeiro padrão encontrado na string, senão houver padrão, retorna -1.

*/

console.log('vou encontrar 123456 no texto'.search(/123456/))

/* match

Retorna os padrões encontrados numa string, caso for incluído a flag g. Senão, retorna
o mesmo resultado da função exec.

*/

const ddMMYYYYRegex = /(\d{1,2})\/(\d{1,2})(?:\/(\d{2,4}))?/
const cpfRegex = /\d{3}\.\d{3}\.\d{3}-\d{2}/g

console.log('20/08/2020 01/04 20/10'.match(ddMMYYYYRegex))
console.log('123.456.789-20'.match(cpfRegex))

/* Construtor RegExp

Utilizado quando for preciso montar uma expressão regex com base em valores
já armazenados. 
*/

const flag = 'gi'
const strRegex = 'abc'

const re = new RegExp(strRegex, flag)
console.log(re.match('abcdefghi'))

