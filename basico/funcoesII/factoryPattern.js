function criarConta(titular, numero, agencia) {
    let _titular = titular
    let _numero = numero
    let _agencia = agencia
    let _saldo = 0
    return {
        // ES6 getters
        set titular(valor) {
            _titular = valor
        },
        get titular() {
            return _titular
        },
        get numero() {
            return _numero
        },
        get agencia() {
            return _agencia
        },
        get saldo() {
            return _saldo
        },
        transferir(valor, favorecido) {
            _saldo -= valor
            favorecido.depositar(valor)
            return true
        },
        depositar(valor) {
            _saldo += valor
        },
        sacar(valor) {
            _saldo -= valor
            return _saldo
        }
    }
}

const contaBruno = criarConta('bruno', '1153982-3', '3684')
const contaLeticia = criarConta('leticia', '0197697-4', '1175')
contaBruno.depositar(10000)
console.log('saldo bruno:', contaBruno.saldo)
console.log('saldo leticia:', contaLeticia.saldo)
console.log(
    'transferencia bruno > leticia:',
    contaBruno.transferir(1000, contaLeticia)
)
console.log('saldo bruno:', contaBruno.saldo)
console.log('saldo leticia:', contaLeticia.saldo)
