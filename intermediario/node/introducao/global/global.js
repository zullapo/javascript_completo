// global.console.log('oi')
console.log('oi')

// __filename e __dirname não estão no global:
console.log(global.__filename)

console.log('__filename:', __filename)
console.log('__dirname:', __dirname)
console.log('argv:', process.argv)

function getFlagValue(flag) {
    const flagValueIndex = process.argv.indexOf(flag) + 1
    return process.argv[flagValueIndex]
}

console.log('--firstname:', getFlagValue('--firstname'))
console.log('--lastname:', getFlagValue('--lastname'))
