function sum() {
    return Array.from(arguments).reduce((ac, vlr) => ac + vlr)
}

function average() {
    return sum(...arguments) / arguments.length
}

