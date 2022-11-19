const express = require('express')
const path = require('path')

let app = express()

app.listen(4501)

app.use(express.static(path.join(__dirname, 'static')))

app.use('/images', express.static(path.join(__dirname, 'images')))

app.use('*', (req, res) => {
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, '404.html'))
    }
})
