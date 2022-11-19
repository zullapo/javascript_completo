const fs = require('fs')

const readStream = fs.createReadStream('./swapi.json', 'UTF-8', (err) => {
    if (err) {
        throw err
    }
})
const writeStream = fs.createWriteStream('./swapi_clone.json', 'UTF-8', (err) => {
    if (err) {
        throw err
    }
})

// readStream.on('data', (data) => {
//     writeStream.write(data)
// })

readStream.pipe(writeStream).on('finish', () => {
    console.log('finish')
})