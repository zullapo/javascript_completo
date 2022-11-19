/* Partial

Torna propriedades de um tipo em opcionais.
*/
interface Square {
    x: number
    y: number
    width: number
    height: number
}

type UpdateSquare = (s: Square, s2: Partial<Square>) => Square

const square: Square = {
    x: 10,
    y: 20,
    width: 100,
    height: 200
}

const square2: Partial<Square> = { x: 20 }

const updateSquare: UpdateSquare = (square, square2) => {
    return Object.assign({}, square, square2)
}

console.log(square)
console.log(square2)

const updatedSquare = updateSquare(square, square2)
console.log(updatedSquare)

/* Pick

Escolhe propriedades de um tipo.
*/
type Positions = Pick<Square, 'x' | 'y'>

/* Omit

Omite propriedades escolhidas, mantendo o resto.
*/
type Sizes = Omit<Square, 'x' | 'y'>

/* Exclude

Exclui propriedades iguais entre tipos. (Diferença)
*/
type Colors = 'Red' | 'Green' | 'Blue' | 'Black' | 'White'
type RGB = Exclude<Colors, 'Black' | 'White'>
type BW = Exclude<Colors, RGB>

/* Extract

Extrai propriedades iguais entre tipos. (Intersecção) 
*/
type DarkColors = 'Black' | 'White' | 'Dark Grey'
type DarkColorsExtract = Extract<Colors, DarkColors>

/* Required

É o oposto de Partial.
*/
type Pessoa = {
    id: number
    nome: string
    idade: number
    sexo: string
}

type PessoaGet = Required<Pessoa>

type PessoaPatch = Partial<Pessoa>

type PessoaRead = Readonly<Pessoa>

// const jose: PessoaPost = {
//     nome: 'Jose',
//     sexo: 'Masculino'
// }

const jose: PessoaGet = {
    id: 1,
    nome: 'Jose',
    idade: 48,
    sexo: 'Masculino'
}

const darlan: PessoaPatch = {
    nome: 'Darlan',
    idade: 24
}

const eduardo: PessoaGet = {
    id: 3,
    nome: 'Eduardo',
    idade: 46,
    sexo: 'Masculino'
}

// eduardo.nome = 'Eduardo Jose'

/* NonNullable

Exclui os tipos null e undefined das propriedades
*/

type PessoaOuNull = Pessoa | null

const pessoaOuNull: PessoaOuNull = null

type PessoaI = NonNullable<PessoaOuNull>

// const pessoa: PessoaI = null

/* Record

Constrói um objeto que mapeia as propriedades do T (primeiro tipo) como chaves
e valores como propriedades do U (segundo tipo).
*/

type Url = {
    url: string
}

type Endpoints = 'products' | 'cart' | 'checkout' | 'dashboard'

type UrlEndpoints = Record<Endpoints, Url>

const navigation: UrlEndpoints = {
    products: { url: '/products' },
    cart: { url: '/cart' },
    checkout: { url: '/checkout' },
    dashboard: { url: '/dashboard' }
}

/* Conditional types

Aplica a sintaxe de if ternário aos tipos.
*/

function myFunction<T>(param: T) {
    return function (param2: T extends number ? number : string) { }
}

myFunction('1')

type NumberOrNever<T> = T extends number ? number : never

const num: NumberOrNever<number> = 10
// const num2: NumberOrNever<string> = 'oi'

/* keyof

Extrai todas propriedades de um tipo.
*/

type PropSquare = keyof Square

const propSquare: PropSquare = 'width'

type ColorsT = 'R' | 'G' | 'B' | 'B' | 'W'

/* Mapped types

Mapeia todas propriedades de um tipo.
*/

type ObjJson = {
    [key: string]: string | number | {}
}

type ColorsMapped = {
    [P in Colors]: P
}

type MappedFromT<T> = {
    [P in keyof T]: number
}

type XYZ = MappedFromT<{ x: 'x', y: 'y', z: 'z' }>

/* Lookup types

Busca tipo de uma propriedade encontrada em um type.
*/

type Pedido = {
    id: number,
    data: Date,
    valorDesconto: number,
    itemPedido: {
        id: number,
        descricao: string,
        quantidade: number,
        valorUnitario: number
    }
}

type ItemPedido = Pedido['itemPedido']

/* typeof

Busca tipo de uma propriedade de um objeto
*/

const pedido: Pedido = {
    id: 109,
    data: new Date(),
    valorDesconto: 0,
    itemPedido: {
        id: 215,
        descricao: 'Lapiseira',
        quantidade: 1,
        valorUnitario: 5.0
    }
}

type ItemPedidoT = typeof pedido.itemPedido

