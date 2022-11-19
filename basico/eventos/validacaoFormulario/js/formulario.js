const txtTitulo = document.querySelector("#txtTitulo")
const txtDescricao = document.querySelector("#txtDescricao")
const chkAceito = document.querySelector("#chkAceito")

const contador = document.querySelector("#contador span")

const btnSubmit = document.querySelector("#btnSubmit")

const feedbackMessage = document.querySelector("#feedbackMessage")
const feedbackMessageClose = document.querySelector("#feedbackMessageClose")

contador.textContent = txtDescricao.maxLength

btnSubmit.disabled = true

function showErrorMessage(msg, cb) {
	feedbackMessage.classList.add("show")
	feedbackMessage.querySelector("p").textContent = msg
    
    if (typeof cb === "function") {
        cb()
    }
}

function hideErrorMessage() {
	feedbackMessage.classList.remove("show")
}

function hideErrorMessageOnEsc(e) {
	console.log("oi")
	e.preventDefault()
	if (e.key == "Escape") {
		hideErrorMessage()
	}
}

// function showFeedbackMessage() {
// 	if (!feedbackMessage.classList.contains("show")) {
// 		feedbackMessage.classList.add("show")
// 	}
// }

chkAceito.addEventListener("click", () => {
	btnSubmit.disabled = !chkAceito.checked
})

feedbackMessageClose.addEventListener("click", hideErrorMessage)

feedbackMessageClose.addEventListener("keyup", hideErrorMessageOnEsc)

btnSubmit.addEventListener("click", (e) => {
	if (
		txtTitulo.value === "" ||
		txtDescricao.value === "" ||
		!chkAceito.checked
	) {
		e.preventDefault()
		showErrorMessage("Preencha os campos", () => feedbackMessageClose.focus())
	}
})

// Keydown: disparado ao pressionar tecla, que imprima caracteres ou não:
// txtDescricao.addEventListener("keydown", () => console.log("keydown"))

// Keypress: diferencia do keydown, pois dispara somente quando tecla imprime caracteres:
// txtDescricao.addEventListener("keypress", () => console.log("keypress"))

// Keyup: disparado ao soltar tecla:
// txtDescricao.addEventListener("keyup", () => console.log("keyup"))

// Change: disparado quando usuário muda valor de elemento (input, select, textarea):
// txtDescricao.addEventListener("change", () => console.log("change"))

// Input: disparado sempre que usuário digita:
txtDescricao.addEventListener("input", function () {
	// contador.textContent -= 1
	// if (txtDescricao.value.length === 0) {
	// 	contador.textContent = "255"
	// }
	contador.textContent =
		parseInt(this.maxLength) - parseInt(this.value.length)
})
