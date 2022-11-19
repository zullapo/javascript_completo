/*
Classes abstratas existem no TypeScript.
*/

class Animal {
    constructor(tipo) {
        if (this.constructor === Animal) {
            throw new Error('Classe abstrata não deve ser instanciada.')
        }

        if (tipo) {
            this.tipo = tipo
        }
    }
    comer() {
        throw new Error(
            `Método "${this.comer.name}" deve ser implementado nas subclasses.`
        )
    }
}

class Pelicano extends Animal {
    constructor(nome) {
        super('ovoviparo')
        if (nome) {
            this.nome = nome
        }
    }

    comer() {
        console.log(`${this.nome} comendo`)
    }

    voar() {
        console.log(`${this.nome} voando`)
    }
}

// const animal = new Animal()
const foo = new Pelicano('foo')
foo.comer()
foo.voar()
