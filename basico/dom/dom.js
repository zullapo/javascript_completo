/*
DOM - Document Object Model

É uma API implementada pelos navegadores que representa o
documento (página) em formato de árvore de objetos HTML (nós).

Nessa árvore de nós, cada nó representa uma parte do documento
(elementos) (por ex.: blocos, textos, imagens...). O DOM permite
criar, mover ou modificar elementos, através de sua API, para que
outras linguagens de programação como JavaScript o acessem.

Outra funcionalidade do DOM são eventos que notificam o código,
quando disparados por alguma interação do usuário com a página
(clicar, pressionar tecla...) ou atualização de um elemento
(renderização, alteração de valor...).
*/

// Selecionando elementos:

// Selecionando elemento por id:
let tituloPrincipal = document.getElementById("title1")

// Selecionando elementos por classe:
let paragrafos = document.getElementsByClassName("paragrafo")

// Selecionando (primeiro) elemento por seletor:
// Seletor de id (#), seletor de classe (.)
tituloPrincipal = document.querySelector("#title1")

let subtituloMain = document.querySelector("#idmain .subtitulo")
let paragrafoMain = document.querySelector("#idmain .paragrafo")

// Selecionando elementos por seletor:
let subtitulos = document.querySelectorAll(".subtitulo")
paragrafos = document.querySelectorAll(".paragrafo")

// Alterando texto de elementos:
tituloPrincipal.textContent = "titulo principal"

subtituloMain.textContent = "subtitulo"
paragrafoMain.textContent = "paragrafo"

// Métodos com sufixo all ou elements retornam coleções de elementos:
paragrafos[1].textContent = "primeiro paragrafo"
paragrafos[2].textContent = "segundo paragrafo"

subtitulos[1].textContent = "segundo subtitulo"
