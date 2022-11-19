/* Union

Permite que uma variável possa ser definida com valores de um ou mais tipos.
*/

/*
A sintaxe de parâmetro opcional (?) é o mesmo que:

function areaCirculo(raio:number, pi: number | undefined) {}
*/

// function mult(x: number, y?: number | undefined): number | null
function div(x: number, y?: number) {
    if (y === null) {
        return null
    }
    return x
}

const divResult = div(10)

let num: number | string = 0

num = '0'
