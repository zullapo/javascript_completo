function getFlagValue(flag) {
    const flagValueIndex = process.argv.indexOf(flag) + 1
    return process.argv[flagValueIndex]
}

module.exports = getFlagValue
