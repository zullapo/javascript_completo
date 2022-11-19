/*
Método replace

Substitui uma string por outra string, retornando o resultado.
Válido apenas para a primeira ocorrência.
*/
let s = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'

console.log(s.replace('o', 'i'))
console.log(s)

/*
Método replaceAll

A diferença entre o replace, é que substitui todas as strings de
todas as ocorrências.
*/
console.log(s.replaceAll('o', 'i'))

/*
Método indexOf

Retorna a posição da primeira ocorrência de um valor na string.
Se não for encontrado, -1 é retornado.
*/
console.log(s.indexOf('o'))
console.log(s.indexOf('oi'))

/*
Método lastIndexOf

A diferença do lastIndexOf, é que trás a posição da última ocorrencia.
*/
console.log(s.lastIndexOf('o'))
console.log(s.lastIndexOf('0'))

/*
Método includes

Retorna true se substring estiver incluída na string, senão false.
*/
console.log(s.includes('Lorem'))
console.log(s.includes('elite'))

/*
Método slice

Remove número de caracteres entre um intervalo start e end - primeiro
e segundo parâmetro da função.
*/
console.log(s.slice(0, 17))
console.log(s)

console.log(s.slice(-4, -1))

/*
Método substring

A diferença entre o slice, é que o substring não funciona com índices
negativos.
*/
console.log(s.substring(0, 2))

console.log(s.substring(-4, -1))
console.log(s)

/*
Método toUpperCase

Troca letras para maiúsculas.
*/
console.log(s.toUpperCase())
console.log(s[6].toUpperCase())

/*
Método toLowerCase

Troca letras para minúsculas.
*/
console.log(s.toLowerCase())
console.log(s[0].toLowerCase())

/*
Método valueOf

Retorna o valor de uma string em objeto.
*/
const strObj = new String('He told us a very exciting adventure story.')
console.log(strObj)
console.log(strObj.valueOf())
console.log(strObj.toString())

/*
Método trim

Remove espaços em branco no início e final de uma string.
*/
const username = ' Paulo                   '

if (username.trim() === 'Paulo') {
    console.log('Login realizado com sucesso.')
}

/*
Métodos trimStart e trimEnd

Métodos complementares do trim, a diferença é que um remove espaços
só no início e outro no final.
*/
console.log(username.trimStart())
console.log(username.trimEnd())

/*
Métodos padStart e padEnd

Adicionam substring no início e final de strings. 
*/

function mascararNumeroTelefone(numero) {
    const partesNumero = numero.split('-')
    let [primeiraParte, segundaParte] = partesNumero
    return (
        primeiraParte[0].padEnd(primeiraParte.length, '*') +
        '-' +
        segundaParte.slice(-2).padStart(segundaParte.length, '*')
    )
}

console.log(mascararNumeroTelefone('91234-2345'))

/*
Métodos charAt e charCodeAt

Retornam caracteres e código unicode de caracteres em uma dada posição.
*/

s = "ABC..."

console.log(s.charAt(0))
console.log(s.charAt(1))

console.log(s.charCodeAt(0))
console.log(s.charCodeAt(1))

