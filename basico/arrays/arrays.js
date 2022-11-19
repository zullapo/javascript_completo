/*
Array é uma coleção que pode conter quaisquer tipos de dados.
Seus dados são inseridos em índices (posições) e podem ser
alterados em tempo de execução, pois arrays são mutáveis.
*/

// Declaração de array

// Ambas formas válidas
let arr = []
let arr2 = new Array()

console.log(arr, typeof arr)
console.log(arr2, typeof arr2)

arr = [1, "Paulo", 15.5, false]
arr2 = new Array(1, "Paulo", 15.5, false)

console.log(arr)
console.log(arr2)

// Alterando índices:
console.log(arr[1], arr[3])

arr[1] = "André"
arr[3] = true

console.log(arr[1], arr[3])

// Exibindo o tamanho da array (número de elementos):
console.log(arr.length)

/* Se subtraírmos o length da array por 1, encontramos o último índice
Isto porque, a array começa com índice 0.
*/
let lastElem = arr.length - 1

arr[lastElem] = false
console.log(arr[lastElem], arr[3])

// Adicionando elementos na array com o método push:
let arr3 = []

arr3.push(1)
console.log(arr3)

arr3.push(2, 3)
console.log(arr3)

// Adicionando itens nos primeiros índices da array:
arr3.unshift(-1, 0)
console.log(arr3)

// Removendo elementos com os métodos pop, shift, splice e remove:
let arr4 = [false, 2, 3, 4, 5, true]

// pop: remove o último elemento da array:
arr4.pop()
console.log(arr4)

// shift: remove o primeiro elemento da array:
arr4.shift()
console.log(arr4)

/*
splice

Remove múltiplos elementos em dadas posições.
*/

// Será removido dois elementos no índice 2, ou seja, os índices 2 e 3.
arr4.splice(2, 2)
console.log(arr4)

/*
Caso somente, o primeiro argumento (start) for informado, então todos os
elementos a partir da posição informada serão removidos.
*/
arr4.splice(0)
console.log(arr4)

// delete: deleta um índice da array
delete arr3[0]
console.log(arr3)

// Nesse caso é recomendado usar splice, pois o delete só deleta indices e propriedades
delete arr3
console.log(arr3)
