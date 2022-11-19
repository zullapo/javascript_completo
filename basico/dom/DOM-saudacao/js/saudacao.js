;(function () {
	const nomeUsuario = null
	const topBarParagrafo = document.querySelector(".top-bar p")

	if (nomeUsuario) {
		console.log(nomeUsuario.text)

		// topBarParagrafo.textContent += nomeUsuario

		// Elemento não é parseado, pois está em um texto e não HTML
		// topBarParagrafo.textContent += "<b>" + nomeUsuario + "</b>"

		topBarParagrafo.innerHTML += "<b>" + nomeUsuario + "</b>"
	} else {
        // parentElement retorna o elemento pai, ou seja, a div top-bar (barra)
        const topBar = topBarParagrafo.parentElement
        
        // Esconde barra
        topBar.style.display = "none"

        // Remove barra
        // topBar.remove()

        // Remove barra (IE11)
        // topBar.parentElement.removeChild(topBar)
    }
})()
