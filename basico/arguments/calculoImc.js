function calculoImc(peso, altura, classificarImc = undefined) {
	// Deve retornar erro caso não receba nenhum parâmetro
	if (peso == undefined || altura == undefined) {
		throw Error("Valores de peso e altura devem ser preenchidos")
	}

	// Deve gerar um erro se receber um parâmetro não número
	if (typeof peso !== "number" || typeof altura !== "number") {
		throw Error("Valores de peso e altura devem ser números")
	}

	if (classificarImc && typeof classificarImc === "function") {
		return classificarImc(calculoImc(peso, altura))
	}

	// return peso / Math.pow(altura, 2)
	return peso / (altura * altura)
}

function classificarImc(imc) {
	if (imc >= 16 && imc <= 16.9) {
		return "Muito abaixo do peso"
	} else if (imc <= 18.4) {
		return "Abaixo do peso"
	} else if (imc <= 24.9) {
		return "Peso normal"
	} else if (imc <= 29.9) {
		return "Acima do peso"
	} else if (imc <= 34.9) {
		return "Obesidade Grau I"
	} else if (imc <= 40) {
		return "Obesidade Grau II"
	} else {
		return "Obesidade Grau III"
	}
}

const imc = calculoImc(80, 1.8)
console.log(imc)

// Deve gerar um erro se receber um parâmetro não número
// console.log(calculoImc(1.8))
// console.log(calculoImc(80))

// Deve retornar erro caso não receba nenhum parâmetro
// console.log(calculoImc())

// console.log(classificarImc(16))
// console.log(classificarImc(17))
// console.log(classificarImc(18.5))
// console.log(classificarImc(25))
// console.log(classificarImc(30))
// console.log(classificarImc(35))
// console.log(classificarImc(40))

// console.log("\n\n")

// console.log(classificarImc(16.9))
// console.log(classificarImc(18.4))
// console.log(classificarImc(24.9))
// console.log(classificarImc(29.9))
// console.log(classificarImc(34.9))
// console.log(classificarImc(40))
// console.log(classificarImc(45))

// const imc = calculoImc(80, 1.8, classificarImc)
// console.log(imc)
