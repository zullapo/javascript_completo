/*
Interface define quais métodos e propriedades uma classe deve implementar.
Assim como uma classe abstrata não pode ser instanciada, sua diferença é
não poder conter métodos concretos (não-abstratos).
*/
interface FormaGeometrica {
    calcularArea(): number
}

interface Desenhavel {
    desenhar(): void
}

class Circulo implements FormaGeometrica, Desenhavel {
    constructor(private raio: number) { }

    calcularArea(): number {
        return Math.PI * Math.pow(this.raio, 2)
    }

    desenhar(): void { }
}

class Triangulo implements FormaGeometrica, Desenhavel {
    constructor(private base: number, private altura: number) { }

    calcularArea(): number {
        return this.base * this.altura / 2
    }

    desenhar(): void { }
}

const circulo = new Circulo(3).calcularArea()
const triangulo = new Triangulo(4,2).calcularArea()

// Diferenças entre type e interface:

// 1. Type possui uma sintaxe mais curta para definir tipos de funções:
type FuncaoMensagemT = (msg: string) => string

interface FuncaoMensagemI {
    (msg: string): string
}

// 2. Tipos não podem ser redeclarados

interface Animal {
    nome: string
}

interface Animal {
    categoria: string
}

type Ponto = {
    x: number
}

// type Ponto = {
//     y: number
// }

// 3. Interfaces usam extends e tipos usam union e intersection

interface User {
    login: string
}

interface Admin extends User {
    isAdmin: true
}

type UserT = {
    login: string
}

type AdminT = {
    isAdmin: true
}

type UserAdmin = User & Admin

type RGB = 'Red' | 'Green' | 'Blue'
