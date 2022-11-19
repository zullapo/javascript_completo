class Produto {
    constructor(quantidade) {
        this._quantidade = quantidade
        this._contador = 0
    }

    set quantidade(valor) {
        if (valor <= 0) {
            throw new Error('Insira uma quantidade maior que 0')
        }
        this._quantidade = valor
    }

    get quantidade() {
        return `Quantidade: ${
            this._quantidade
        }. Esse método foi visualizado ${++this._contador} vez${
            this._contador > 1 ? 'es' : ''
        }`
    }
}

const produto = new Produto()
produto.quantidade = 10
console.log(produto.quantidade)
console.log(produto.quantidade)
console.log(produto.quantidade)
console.log(produto.quantidade)

class Pessoa {
    constructor() {
        this._usuarios = []
    }

    set usuarios(usuario) {
        if (!this._usuarios.includes(usuario)) {
            this._usuarios.push(usuario)
        }
    }

    get usuarios() {
        if (this._usuarios.length > 0) {
            return this._usuarios
        }
    }

    get usuario() {
        return this._usuarios[this._usuarios.length - 1]
    }
}

const emmanuel = new Pessoa()
emmanuel.usuarios = 'manuel.carvalho'

console.log(emmanuel.usuario)

emmanuel.usuarios = 'manuel.62'
emmanuel.usuarios = 'manuel31915'

console.log(emmanuel.usuarios)
