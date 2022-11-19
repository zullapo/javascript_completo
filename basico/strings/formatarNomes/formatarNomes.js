function formatarNome(nomeCompleto) {
    const s = nomeCompleto
    const posicaoEspaco = s.indexOf(' ')
    if (posicaoEspaco > 0) {
        // const primeiroNome = s.substring(0, posicaoEspaco)
        // const sobrenome = s.substring(posicaoEspaco, nomeCompleto.length)
        const primeiroNome = s.slice(0, posicaoEspaco)
        const sobrenome = s.slice(posicaoEspaco + 1)
        return `${sobrenome}, ${primeiroNome}`.trimStart()
    }
    return s
}

function formatarNomeSplit(nomeCompleto) {
    const s = nomeCompleto.split(' ')
    // let s = nomeCompleto.split()
    // const posicaoEspaco = s.indexOf(' ')
    // if (posicaoEspaco > 0) {
    //     s = nomeCompleto.split(' ')
    if (s.length > 1) {
        const primeiroNome = s.shift()
        const sobrenome = s.join(' ')
        return `${sobrenome}, ${primeiroNome}`
    }
    return nomeCompleto
}

console.log(formatarNome('Daniel')) // Daniel
console.log(formatarNome('Daniel Morales')) // Morales, Daniel
console.log(formatarNome('Daniel Tapias Morales')) // Tapias Morales, Daniel

console.log('\n')

console.log(formatarNomeSplit('Daniel')) // Daniel
console.log(formatarNomeSplit('Daniel Morales')) // Morales, Daniel
console.log(formatarNomeSplit('Daniel Tapias Morales')) // Tapias Morales, Daniel
