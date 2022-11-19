const paragraphs = Array.from(document.querySelectorAll('.card p'))
const paragraphsTexts = paragraphs.map((paragraph, _) => paragraph.innerText)

const maxLength = 100

paragraphs.forEach((paragraph, index) => {
    if (paragraph.innerText.length > maxLength) {
        paragraph.textContent =
            paragraph.innerText.substring(0, maxLength) + '...'

        const card = paragraph.parentElement
        card.classList.add('text-hidden')

        const expandButton = document.createElement('button')
        expandButton.innerHTML = `<i class='fas fa-chevron-up'></i>`
        card.appendChild(expandButton)

        expandButton.addEventListener('click', function (e) {
            toggleButton(e, paragraph, index)
        })
    }
})

function toggleButton(e, paragraph, index) {
    const currentTarget = e.currentTarget
    const card = currentTarget.parentElement

    card.classList.toggle('text-hidden')

    currentTarget.querySelector('i').classList.toggle('fa-chevron-up')
    currentTarget.querySelector('i').classList.toggle('fa-chevron-down')

    if (card.classList.contains('text-hidden')) {
        paragraph.textContent =
            paragraph.innerText.substring(0, maxLength) + '...'
    } else {
        paragraph.textContent = paragraphsTexts[index]
    }
}
