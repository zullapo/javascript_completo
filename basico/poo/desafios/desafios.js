/*
Desafio - Conta Bancária

1. Criar conta bancária
    - Cliente
    - Número
    - Saldo
    - Depositar
    - Sacar
*/

class ContaBancaria {
    constructor(titular, numero, agencia) {
        if (this.constructor === ContaBancaria) {
            throw new Error(
                `Classe abstrata ${this.constructor.name} não deve ser instanciada.`
            )
        }
        this._titular = titular
        this._numero = numero
        this._agencia = agencia
        this._saldo = 0
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

    dadosCliente() {
        return `nome: ${this.titular.nome}, ${this.titular.tipoDocumento}: ${this.titular.documento}`
    }

    getSaldo() {
        throw new Error(
            `Método "${this.getSaldo.name}" deve ser implementado nas subclasses`
        )
    }

    depositar(valor) {
        this._saldo += valor
    }

    sacar(valor) {
        throw new Error(
            `Método "${this.sacar.name}" deve ser implementado nas subclasses`
        )
    }
}

/*
2. Criar duas classes que herdam de ContaBancaria
    2.1. ContaCorrente
        - limite
        - sacar(valor)

    2.2. ContaPoupanca
        - aniversario
        - sacar(valor)
*/

class ContaCorrente extends ContaBancaria {
    constructor(titular, numero, agencia, limite) {
        super(titular, numero, agencia)
        this._limite = limite
    }

    sacar(valor) {
        let disponivel = this._saldo + this._limite
        if (valor > disponivel) {
            throw new Error('Saldo insuficiente')
        }
        this._saldo -= valor
    }

    getSaldo() {
        return `saldo + limite: ${this._saldo + this._limite}`
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(titular, numero, agencia, aniversario) {
        super(titular, numero, agencia)
        this._aniversario = aniversario
    }

    calcularDiferencaMes() {
        return (
            new Date(2022, 7, 27).getMonth() -
            (this._aniversario.getMonth() - 1)
        )
    }

    renderPoupanca() {
        let mesesRendimento = this.calcularDiferencaMes()
        const taxaRendimento = 1.5
        while (mesesRendimento >= 0) {
            this._saldo = this._saldo * taxaRendimento
            mesesRendimento -= 1
        }
        // console.log(this._saldo)
    }

    sacar(valor) {
        if (this.saldo > valor) {
            throw new Error('Valor maior que saldo')
        }
        this._saldo -= valor
    }

    getSaldo() {
        return `saldo: ${this._saldo}`
    }
}

const contaJoao = new ContaCorrente('joao', '1104166-8', '7083', 500)
const contaPedro = new ContaPoupanca('pedro', '1275640-7', '4566', new Date())

contaJoao.depositar(500)
contaPedro.depositar(2500)

console.log('conta joao (corrente): deposito -> 500')
console.log('conta pedro (poupanca): deposito -> 2500')

console.log('conta joao (corrente): saldo ->', contaJoao.getSaldo())
console.log('conta pedro (poupanca): saldo ->', contaPedro.getSaldo())

console.log(contaJoao._saldo)
contaJoao.sacar(500)
contaPedro.sacar(2000)

console.log('conta joao (corrente): sacar -> 1000')
console.log('conta pedro (poupanca): sacar -> 2000')

console.log('conta joao (corrente): saldo ->', contaJoao.getSaldo())
console.log('conta pedro (poupanca): saldo ->', contaPedro.getSaldo())

contaPedro.renderPoupanca()
console.log('conta joao (poupanca): saldo ->', contaPedro.getSaldo())

/*
Desafio - Cliente (Composição)

3. criar classe Cliente e compor as classes concretas
    - nome
    - documento
*/

class Cliente {
    constructor(nome, documento) {
        this.nome = nome
        this.documento = documento
    }
}

const clienteMauro = new Cliente('Mauro', 6811431)
const contaMauro = new ContaPoupanca(
    clienteMauro,
    '1104133-2',
    '5271',
    new Date()
)

/*
4. Agora surgiu a necessidade de Cliente ser Pessoa Física ou Juridica.
    Pessoa Fisica: CPF
    Pessoa Juridica: CNPJ
*/

class Pessoa {
    constructor(nome, documento, tipoDocumento) {
        if (this.constructor === Pessoa) {
            throw new Error(
                `Classe abstrata ${this.constructor.name} não deve ser instanciada.`
            )
        }
        this._nome = nome
        this._documento = documento
        this._tipoDocumento = tipoDocumento
    }

    get nome() {
        return this._nome
    }

    get documento() {
        return this._documento
    }

    get tipoDocumento() {
        return this._tipoDocumento
    }
}

class PessoaFisica extends Pessoa {
    constructor(nome, documento) {
        super(nome, documento, 'CPF')
    }
}

class PessoaJuridica extends Pessoa {
    constructor(nome, documento) {
        super(nome, documento, 'CNPJ')
    }
}

const clienteHariel = new PessoaFisica('Hariel', '1314151242')
const clienteMarcio = new PessoaJuridica('Marcio', '131314152')

const contaHariel = new ContaPoupanca(clienteHariel, '314145-2', '3142')
const contaMarcio = new ContaPoupanca(clienteMarcio, '318914-1', '3312')

console.log(contaHariel.dadosCliente())
console.log(contaMarcio.dadosCliente())

class Transferir {
    static execute(contaOrigem, contaDestino, valor) {
        if (!contaOrigem instanceof ContaBancaria || !contaOrigem instanceof ContaBancaria) {
            throw new Error('Contas necessitam herdar da classe ContaBancaria')
        }
        try {
            contaOrigem.sacar(valor)
            contaDestino.depositar(valor)
        } catch (e) {
            console.log(`Erro ocorrido: ${e}`)
        }
    }
}
