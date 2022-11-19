function calcularMedia() {
	let total = 0
	let numElementos = arguments.length
	for (let i = 0; i < numElementos; i++) {
		if (typeof arguments[i] !== "number") {
			let posicaoArgumento = arguments.indexOf(arguments[i])
			throw Error(
				`Valor (${arguments[i]}) na posição ${posicaoArgumento} não é um número`
			)
		}
		total += arguments[i]
	}
	if (numElementos == 0) {
		return 0
	}
	return total / numElementos
	// return total / numElementos || 0
}

// Deve gerar um erro se receber parâmetro que não é número:
console.log(calcularMedia(10, "...", 30))

// Deve retornar zero caso não receba nenhum número
console.log(calcularMedia())

console.log(calcularMedia(10, 20, 30))
