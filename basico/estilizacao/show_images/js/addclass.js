window.addEventListener('scroll', mostraImagens)

let imagens = Array.from(document.querySelectorAll('[data-addclass-on-scroll]'))

function mostraImagens() {
    if (imagens.length === 0) {
        window.removeEventListener('scroll', mostraImagens)
    }

    imagens.forEach((img) => {
        if (pegaImagens(img)) {
            const delay = img.getAttribute('data-addclass-on-scroll-delay') || 0
            setTimeout(() => {
                let className = img.getAttribute('data-addclass-on-scroll')
                img.classList.add(className)
                img.removeAttribute('data-addclass-on-scroll')
                img.removeAttribute('data-addclass-on-scroll-delay')
                imagens = Array.from(
                    document.querySelectorAll('[data-addclass-on-scroll]')
                )
            }, delay)
        }
    })
}

function pegaImagens(img) {
    let rect = img.getBoundingClientRect()
    // Pega imagens quando scrollar até a metade da página
    return (
        (rect.top <= 0 && rect.bottom >= 0) ||
        (rect.top >= 0 && rect.bottom <= innerHeight)
    )
}

