// arrow function
setTimeout(() => {
    console.log('Timeout')
}, 2000)

// arrow function (return one-line)
const sum = [1, 2, 3].reduce((ac, vlr) => ac + vlr)
console.log(sum)

// arrow function (return)
const nameLetterCounter = ['Adam', 'John', 'Jules', 'Ana', 'Beatrice'].reduce((ac, vlr) => {
    if (ac[vlr[0]]) {
        ac[vlr[0]]++
    } else {
        ac[vlr[0]] = 1
    }
    return ac
}, {})
console.log(nameLetterCounter)

// named arrow function
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))
sleep(2000).then(() => console.log('slept for 2 seconds'))

// IIFE (arrow function)
;(() => {
    console.log('Olá')
})()

