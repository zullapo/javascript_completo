function Animal(tipo) {
    if (tipo) this.tipo = tipo
}

const vaca = new Animal('mamifero')
const galinha = new Animal('mamifero')
const peixe = new Animal('anfibio')
const aranha = new Animal()

Animal.prototype.obterTipo = function () {
    return this.tipo
}

Animal.prototype.tipo = 'desconhecido'

console.log('tipo aranha:', aranha.tipo)
console.log('prototype vaca:', vaca.__proto__)
console.log('prototype classe:', Animal.prototype)
console.log(
    'prototype instancia === prototype classe:',
    vaca.__proto__ === Animal.prototype
)

//***************************************************

function Cachorro(nome, tipo) {
    this.nome = nome
    /*
    Equivalente ao super em outras linguagens,
    necessário para chamar o construtor da classe pai
    */
    Animal.call(this, tipo)
    this.construtor = Cachorro
}

/*
Precisa obter o protótipo da classe pai, para acessar
os mesmos métodos a partir da classe filho.
*/
Cachorro.prototype = new Animal()

let rex = new Cachorro('Rex', 'mamifero')
console.log(rex)

for (const prop in rex) {
    // Aparece constructor, pois é uma propriedade
    console.log(prop)
}

//************************************************************

console.log()

function Cachorro(nome, tipo) {
    this.nome = nome
    Animal.call(this, tipo)
    // this.construtor = Cachorro
    Object.defineProperty(Cachorro.prototype, "constructor", {
        value: Cachorro,
        // enumerable significa que não vai ser mostrada
        enumerable: false
    })
}

for (const prop in rex) {
    // Uma forma de não mostrar o this.constructor
    if (rex.hasOwnProperty(prop)) {
        console.log(prop)
    }
}

console.log(rex instanceof Animal)
console.log(rex.isPrototypeOf(Animal))
console.log(Object.getPrototypeOf(rex))

