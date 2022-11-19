/*
any:

Permite que função seja preenchida com valores de qualquer tipo.

- Ambíguo
- Pouco seguro

function add(x, y) {
    return x + y
}
*/

/*
unknown:

Exibe erro, impossibilitando acessar parâmetros sem checar seus tipos.

- Específico
- Seguro
*/
function add(x: unknown, y: unknown) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y
    }
    return null
}

const teste = add(3, 5)
