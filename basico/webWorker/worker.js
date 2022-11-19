const delay = (ms) => {
    const start = new Date().getTime()
    while (new Date().getTime() - start <= ms) {
        // espera x segundos
    }
}

this.addEventListener('message', function (e) {
    delay(3000)
    console.log(e)
})

console.log('pato gato sapato pato'.match(/pato|gato/g))