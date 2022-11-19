const fs = require('fs')

// const files = fs.readdirSync('./files')
// console.log(files)

fs.readdir('./files', (err, files) => {
    if (err) {
        throw err
    }

    console.log(files)
})