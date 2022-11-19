/* void

Indica que a função não retorna valor, implicitamente retornando undefined.
*/

function showMessage(msg: string): void {
    console.log(msg)
}

const message = showMessage('Hello')

/* never

Indica que a função nunca retornará valor, pois o programa irá parar.
*/

function showError(msg: string): never {
    throw new Error(msg)
}
