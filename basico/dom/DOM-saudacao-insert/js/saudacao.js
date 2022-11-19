;(function () {
	const nomeUsuario = "José"

	if (nomeUsuario) {
		const topBar = document.createElement("div")
		topBar.className = "top-bar"
		topBar.innerHTML = `<p>Bem-vindo(a), ${nomeUsuario}</p>`

		const elementoPai = document.querySelector(".hero")

		elementoPai.insertBefore(topBar, elementoPai.firstElementChild)
	}
})()
