const fs = require('fs')
const https = require('https')

const options = {
    hostname: 'example.com',
    port: 443,
    path: '/',
    method: 'GET'
}

const writeStream = fs.createWriteStream('index.html', "UTF-8", (err) => {
    if (err) {
        throw err
    }
})

const request = https.request(options, (res) => {
    res.setEncoding('UTF-8')
    res.pipe(writeStream).on('finish', () => {
        console.log('finish')
    })
})

request.end()
