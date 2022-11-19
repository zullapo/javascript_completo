String.prototype.replaceAll = function (strToReplace, replaceStr) {
    let originalStr = this
    // let pos = 0
    // let resultStr = ''

    // while (pos !== originalStr.length) {
    //     let finalPos = pos + strToReplace.length
    //     let strToReplaceSub = originalStr.substring(pos, finalPos)
    //     if (strToReplaceSub === strToReplace) {
    //         resultStr = resultStr + replaceStr
    //     } else {
    //         resultStr = resultStr + strToReplaceSub
    //     }
    //     pos = finalPos
    // }

    //  0 - 2
    //  2 - 4
    //  4 - 6
    //  6 - 8

    return originalStr.valueOf().split(strToReplace).join(replaceStr)
}

console.log('oi oi oi oi'.replaceAll('oi', 'lo'))
console.log(
    'Loremipsumdolorsitamet,consecteturadipisicingelit,sed'.replaceAll('o', 'u')
)
