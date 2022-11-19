/*
Desafio - Conta Bancária

1. Criar conta bancária
    1.1. Cliente
    2.2. Número
    2.3. Saldo
    2.4. Depositar
    2.5. Sacar
*/

class ContaBancaria {
    constructor(titular, numero, agencia) {
        if (this.constructor === ContaBancaria) {
            throw new Error(
                $`Classe abstrata ${this.constructor.name} não deve ser instanciada.`
            )
        }
        this._titular = titular
        this._numero = numero
        this._agencia = agencia
        this._saldo = 0
    }

    set titular(valor) {
        this._titular = valor
    }

    get titular() {
        return this._titular
    }

    get numero() {
        return this._numero
    }

    get agencia() {
        return this._agencia
    }

    getSaldo() {
        return this._saldo
    }

    depositar(valor) {
        this._saldo += valor
    }

    sacar(valor) {
        this._saldo -= valor
    }
}

// const contaJoao = new ContaBancaria('joao', '1104166-8', '7083')
// const contaPedro = new ContaBancaria('pedro', '1275640-7', '4566')
// const contaInacia = new ContaBancaria('inacia', '94029-1', '4996')

// contaJoao.depositar(500)
// contaPedro.depositar(2500)
// contaInacia.depositar(5000)

// console.log(contaJoao.getSaldo())
// console.log(contaPedro.getSaldo())
// console.log(contaInacia.getSaldo())

// contaJoao.sacar(250)
// contaPedro.sacar(1250)
// contaInacia.sacar(2500)

// console.log(contaJoao.getSaldo())
// console.log(contaPedro.getSaldo())
// console.log(contaInacia.getSaldo())
