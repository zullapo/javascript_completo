/*
Strict mode

Três vantagens:

- Exibe erros silenciosos do JavaScript, tornando o script mais seguro.
- Remove otimizações extras, fazendo com que o script seja executado mais rápido.
- Proíbe sintaxes das versões futuras do EcmaScript
*/

// "use strict";

// Variável deve ser declarada com let/var primeiro:
// x = 10;

let x = 10
console.log(x)

// O use strict pode ser aplicado no escopo de função, ao invés do script inteiro.
// function imprimaX() {
//     "use strict";
//     x = 10;
//     console.log(x);
// }

function imprimaX() {
	"use strict"
	let x = 20
	console.log(x)
}

imprimaX()

// Função altera o objeto window do navegador, adicionando o atributo a.
// function Teste() {
//     console.log(this);
//     this.a = "10";
// }

// O use strict torna o objeto window undefined no escopo da função:
// function Teste() {
//     "use strict";
//     console.log(this);
//     this.a = "10";
// }

// Teste();
