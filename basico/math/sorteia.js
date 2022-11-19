/*
Gera número rândomico
Multiplica número gerado pelo (max - min), para obter número entre 0 e (max - min)
Soma resultado ao número mínimo, para obter número entre mínimo e máximo.
*/
function getRandomNumber(min = 0, max = 1, int = true) {
    let randomNumber = Math.floor(Math.random() * (max - min) + min)
    return int ? parseInt(randomNumber) : randomNumber
}

console.log(getRandomNumber(10, 20))
console.log(getRandomNumber(40, 50))
console.log(getRandomNumber(20, 90))
