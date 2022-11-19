const txtEmail = document.getElementById("txtEmail")
const newsletterFeedback = document.getElementById("newsletterFeedback")

function cadastrarEmail() {
	let email = txtEmail.value
	newsletterFeedback.innerHTML = `O email ${email} foi cadastrado com sucesso`
}

// const btn = document.getElementById("btn")
// btn.addEventListener("click", cadastrarEmail)
