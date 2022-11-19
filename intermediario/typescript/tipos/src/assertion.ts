/* Type assertion

Converte tipo nulável genérico para tipo não nulável específico
*/
const btnOk = document.getElementById('btnOk') as HTMLButtonElement

btnOk.addEventListener('click', (e) => console.log(e))

/* Optional chaining

Verifica se objeto é nulo ou undefined antes de acessar método
*/
const btnCancel = document.getElementById('btnCancel')

btnCancel?.addEventListener('click', (e) => console.log(e))

/* Non-null assertion

Objeto possivelmente retorna nulo, mas para fins de teste, garante
que o objeto não retorna nulo. 
*/
const paragraph = document.getElementById('paragraph')

console.log(paragraph!.innerText)


