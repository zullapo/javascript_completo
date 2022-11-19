const fs = require('fs')

const readStream = fs.createReadStream('./swapi.json', 'UTF-8', (err) => {
    if (err) {
        throw err
    }
})

let json = ''

readStream.on('data', (data) => {
    console.log('on data')
    console.log(data.length)
    json += data
})

readStream.on('end', () => {
    console.log('on end')
    // console.log(json)
    console.log(json.length)
})