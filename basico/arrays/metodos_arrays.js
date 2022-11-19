let arr = [10, 20, "hello", false, 30, 5, 1]

/*
Método every
Itens da array são testados pela função de callback, se todos testes
retornarem true, o resultado final será true e caso um retornar false,
será false.
*/
const soNumeros = arr.every((el) => {
	return typeof el == "number"
})

console.log(soNumeros)

/*
Método some
Ao contrário do every, se um teste retornar true, o resultado final será true.
*/
const temNumeroPar = arr.some((el) => {
	return typeof el == "number" && el % 2 == 0
})

console.log(temNumeroPar)

/*
Método foreach
Percorre todos elementos de uma array, não retornando nenhum valor.
*/
const numerosPares = []
const elementosArr = arr.forEach((el) => {
	if (typeof el == "number" && el % 2 == 0) {
		numerosPares.push(el)
	}
})

console.log(`elementosArr: ${elementosArr}`)
console.log(`numerosPares: ${numerosPares}`)

/*
Método filter
Mantém somente os itens que atendem determinadas condições.
*/

arr = [1, 3, 4, 5, 2, 8]

const numerosImpares = arr.filter((el) => {
	return typeof el == "number" && el % 2 != 0
})

console.log(numerosImpares)

const numeros = arr.filter((el) => {
	return typeof el == "number"
})

console.log(`numerosImpares: ${numerosImpares}`)

/*
Método map
Executa função de callback para cada item de uma array e cria uma nova array
a partir de cada resultado.
*/
const quadradoNumeros = numeros.map((el) => {
	return el * el
})

console.log(`quadradoNumeros: ${quadradoNumeros}`)

//----------------------------------------------------------------------------

arr = [true, 2, 3, "ar", 3]

/*
Método indexOf
Retorna a posição da primeira aparição de um elemento encontrado na array,
senão encontrado, retorna -1.
*/
console.log(`Posição do elemento "ar" na arr: ${arr.indexOf("ar")}`)
console.log(`Posição do elemento "3" na arr: ${arr.indexOf(3)}`)
console.log(`Posição do elemento "1" na arr: ${arr.indexOf(1)}`)

/*
Método lastIndexOf
Ao contrário do indexOf, retorna a posição da última aparição de um elemento
encontrado na array.
*/
console.log(`Posição do elemento "3" na arr: ${arr.lastIndexOf(3)}`)
console.log(`Posição do elemento "1" na arr: ${arr.lastIndexOf(1)}`)

/*
Método includes
Retorna true caso elemento esteja incluso na array, senão false.
*/
console.log(`Elemento "3" está na arr? ${arr.includes(3)}`)
console.log(`Elemento "1" está na arr? ${arr.includes(1)}`)

/*
Método find
Retorna true para o primeiro elemento que atenda uma determinada condição,
senão false. 
*/
let temString = arr.find((el) => {
	return typeof el == "string"
})

console.log(`Arr tem string? ${temString}`)

/*
Método findIndex
Retorna posição do primeiro elemento que atenda uma determinada condição,
senão -1.
*/

const posicaoPrimeiraString = arr.findIndex((el) => {
	return typeof el == "string"
})

console.log(`Qual é a posição da primeira string? ${posicaoPrimeiraString}`)

//----------------------------------------------------------------------------

arr = [10, 20, 30, 40]

/*
Método toString
Retorna array em formato de string, itens são separados por vírgula.
*/

let stringArr = arr.toString()
console.log(stringArr)
// console.log(arr)

/*
Método join
Assim como toString também retorna uma string, porém metodo possue parâmetro
opcional para definir um separador, ao invés da virgula por padrão.
*/

stringArr = arr.join("; ")
console.log(stringArr)

/*
Método concat
Concatena valores e itens de arrays com uma array.
Também serve para copiar itens de uma array em uma array vazia.
*/

let arr2 = [90, 100]

arr = arr.concat(50, [60, 70, 80], arr2)
console.log(arr)

arr2 = [].concat(arr)
arr2.pop()
console.log(arr)
console.log(arr2)

//----------------------------------------------------------------------------

arr = [10, 20, 30]

/*
Método reverse
Inverte a ordem dos índices de uma array.
*/

console.log(arr.reverse())

/*
Método reduce
Reduz itens de uma array a um so valor.

Possue quatro parâmetros

Acumulador (ac): recebe o primeiro índice da array, caso não for declarado
Valor Atual (vlr): recebe o segundo índice da array, caso não for declarado
Index Atual (idx): recebe o índice do valor atual percorrido
Array Original (arr): recebe o array percorrido
*/

const somaReduce = arr.reduce((ac, vlr, idx, arr) => {
	console.log("acumulador:", ac)
	console.log("valor:", vlr)
	console.log()
	console.log("índice acumulador:", idx - 1)
	console.log("índice valor:", idx)
	console.log()
	console.log("array:", arr)
	let valorAcumulado = ac + vlr
	console.log("valor acumulado", valorAcumulado)
	console.log()
	console.log("--------------------")
	return valorAcumulado
})

console.log(somaReduce)

arr = ["Daniel", "José", "João", "Decio", "Paulo"]

const nomesPorLetra = arr.reduce((ac, vlr, idx, arr) => {
    let primeiraLetra = vlr[0].toUpperCase()

    if (ac[primeiraLetra]) {
        ac[primeiraLetra]++
    } else {
        ac[primeiraLetra] = 1
    }

    return ac
}, {})

// console.log(nomesPorLetra)

arr = [1, 5, 3, 1, 2, 4, 6, 8, 9, 3, 4, 7]

const numerosUnicos = arr.reduce((ac, vlr, idx, arr) => {
    // if (ac.indexOf(vlr) < 0) {
    if (!ac.includes(vlr)) {
        ac.push(vlr)
    }
    return ac
}, [])

console.log(numerosUnicos)

//----------------------------------------------------------------------------

/*
Método from

Cria uma cópia (shallow copy) de uma coleção que parece array ou objeto iterável. 
*/
arr = [1, 2, 3]

const copiaArr = Array.from(arr)
copiaArr.push(4)
console.log(arr)
console.log(copiaArr)

/*
Método of

Cria uma array a partir dos elementos inseridos, sua diferença para o construtor
Array, é que o construtor cria uma array de x espaços vazios caso apenas um
número seja informado.
*/

arr = Array(3)
arr2 = Array.of(3)
console.log(arr)
console.log(arr2)

arr = Array(1, 2, 3)
arr2 = Array.of(1, 2, 3)
console.log(arr)
console.log(arr2)
