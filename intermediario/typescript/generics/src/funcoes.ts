function somaOuConcatena(x: number | string, y: number | string) {
    return typeof x === 'number' && typeof y === 'number' ? x + y : x + '' + y
}

somaOuConcatena(1, 2)
somaOuConcatena('1', '2')
somaOuConcatena(1, '2')
somaOuConcatena('1', 2)

// function somaOuConcatenaF<T>(x: T, y: T) {
//     return typeof x === 'number' && typeof y === 'number' ? x + y : x + '' + y
// }

function somaOuConcatenaF<T extends number | string>(x: T, y: T) {
    return typeof x === 'number' && typeof y === 'number' ? x + y : x + '' + y
}

somaOuConcatenaF(1, 2)
somaOuConcatenaF('1', '2')
// somaOuConcatenaF(1, '2')
// somaOuConcatenaF('1', 2)
// somaOuConcatenaF(true, false)
