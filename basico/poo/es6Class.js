class Animal {
    constructor(tipo) {
        if (tipo) {
            this.tipo = tipo
        }
    }

    obterTipo() {
        return this.tipo
    }
}

Animal.prototype.tipo = 'desconhecido'

class Cachorro extends Animal {
    constructor(nome, tipo) {
        super(tipo)
        this.nome = nome
    }
}
