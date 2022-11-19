/*
O atributo arguments é padrão em todas funções, recebe os 
valores passados na chamada, mesmo que a função não
espere nenhum parâmetro.
*/

function soma() {
	console.log(arguments)
	let total = 0
	for (let i = 0; i < arguments.length; i++) {
		total += arguments[i]
	}
	return total
}

console.log(soma(1, 2, 3))
console.log(soma(10, 20, 30))
