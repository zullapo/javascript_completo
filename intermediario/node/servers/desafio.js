const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http
    .createServer((req, res) => {
        const getContentType = (url) => {
            const fileExtension = url.split('.').pop()
            return contentTypes[fileExtension] || contentTypes['html']
        }

        const contentTypes = {
            html: 'text/html',
            css: 'text/css',
            js: 'text/javascript',
            png: 'image/png'
        }

        const getStaticFile = (url) => {
            let statusCode = 200
            if (!fs.existsSync(url)) {
                statusCode = 404
                url = path.join(__dirname, 'static/404.html')
            }
            res.writeHead(statusCode, { 'Content-Type': getContentType(url) })
            fs.createReadStream(url).pipe(res)
        }

        if (req.url == '/') {
            req.url = path.join(req.url, 'static/index.html')
        }
        getStaticFile(path.join(__dirname, req.url))
    })
    .listen(4500)

const address = server.address()

console.log(`Servidor escutando na porta ${address.port}`)
console.log(`http://localhost:${address.port}`)
