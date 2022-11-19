/*
Objetos de primeira classe

Funções são objetos em JavaScript e podem:

- Receber outras funções como parâmetro (callback)
- Receber atributos
- Retornar outras funções 
*/

function funcao(callback) {
	console.log("Chamando callback")
	console.log(typeof callback)
	if (typeof cb === "function") {
		callback()
	}
	// typeof cb === "function" && cb();
}

function callback() {
	console.log("Callback executado")
}

funcao(callback)

const obj = {
	callback,
	// callback: callback
}

obj.callback()

function funcao2(n1) {
	// return function(n1) {
	//     n1 * n2
	// }
	return (n2) => n1 * n2
}

const resultadoFuncao2 = funcao2(10)
const resultadoMultiplicacao = resultadoFuncao2(20)
// console.log(funcao2(10)(20))

function media() {
	let soma = 0
	for (let i = 0; i < arguments.length; i++) {
		soma += arguments[i]
	}
	return soma / arguments.length
}

console.log(media(10, 20, 40, 50, 60, 70))

function imc(peso) {
	let soma = 0
	for (let i = 0; i < arguments.length; i++) {
		soma += arguments[i]
	}
	return soma / arguments.length
}

console.log(media(10, 20, 40, 50, 60, 70))
