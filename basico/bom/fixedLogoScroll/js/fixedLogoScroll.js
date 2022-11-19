window.addEventListener('scroll' , () => {
    if (scrollY > 250) {
        document.body.classList.add('fx')
    } else if (scrollY <= 250) {
        document.body.classList.remove('fx')
    }
})