class CalculaIMC {
    static calcular(altura, peso) {
        return peso / (altura * altura)
    }
}

console.log(CalculaIMC.calcular(1.8, 80))

//****************************************

class Circulo {
    static pi = 22 / 7

    static calcularArea(raio) {
        return this.pi * (raio * raio)
    }

    calcularCircunferencia(raio) {
        return 2 * Circulo.pi * raio
    }
}

const circulo = new Circulo()
console.log(Circulo.pi)
console.log(Circulo.calcularArea(2.45))
console.log(circulo.calcularCircunferencia(3.25))
