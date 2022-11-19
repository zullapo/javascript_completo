/*
Operador spread
Expande os elementos de uma array, permitindo a extração dos
elementos expandidos, sem que modifique a array.
*/
let arr2 = [4, 5, 6]
let arr = [1, 2, 3, ...arr2]

console.log(arr)
console.log(arr2)

/*
Destructuring
Empacota valores de arrays em variáveis
*/

/* Nesse caso, o spread retorna o restante da array,
o que é chamado de rest syntax.
*/
const [n1, n2, n3, ...n] = arr
console.log(n1, n2, n3, n)

/*
for in
Geralmente utilizado para iterar sobre propriedades de um objeto,
como uma alternativa ao for tradicional.
*/
const pessoa = {
    nome: "José",
    idade: "50",
    sexo: "M"
}

for (const prop in pessoa) {
    if (pessoa.hasOwnProperty(prop)) {
        console.log(`${prop}: ${pessoa[prop]}`)
    }
}

/*
for of
Similiar ao for in, porém mais utilizado para iterar sobre uma array
ou qualquer objeto iterável.
*/
for (const i of arr) {
    console.log(i)
}

console.log()

/*
Desafio: criar função sum e average
*/
function sum() {
    // const numbers = Array.from(arguments)
    const numbers = [...arguments]
    return numbers.reduce((ac, vlr) => {
        return ac + vlr
    })
}

function average() {
    return sum(...arguments) / arguments.length
}

console.log(sum(1, 2, 3))
console.log(average(1, 2, 3))

/*
Desafio no ES5 (sem spread)
*/
function sum2() {
    const numbers = []
    /*
    Método call
    Invoca uma função com um determinado objeto e argumentos
    */
    Array.prototype.forEach.call(arguments, (argument) => {
        numbers.push(argument)
    })
    return numbers.reduce((ac, vlr) => {
        return ac + vlr
    })
}

function average2() {
    /*
    Método apply
    A diferença para o call, é que os argumentos podem ser passados
    numa array ou qualquer objeto iterável
    */ 
    const total = sum2.apply(null, arguments)
    return total / arguments.length
}

console.log(sum2(1, 2, 3))
console.log(average2(1, 2, 3))

