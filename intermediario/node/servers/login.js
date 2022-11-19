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
            console.log(url)
            let statusCode = 200
            if (!fs.existsSync(url)) {
                statusCode = 404
                url = path.join(__dirname, 'static/404.html')
            }
            res.writeHead(statusCode, { 'Content-Type': getContentType(url) })
            fs.createReadStream(url).pipe(res)
        }

        let url = req.url
        switch (url) {
            case '/':
                url = path.join(url, 'static/index.html')
                break
            case '/login':
            case '/login.html':
                if (req.method == 'post') {
                    let body = ''
                    req.on('data', (data) => (body += data))
                    req.on('end', () => console.log(body))
                }
                getStaticFile(path.join(__dirname, '/login.html'))
                break
            default:
                getStaticFile(path.join(__dirname, 'static', url))
        }
    })
    .listen(4500)

const address = server.address()

console.log(`Servidor escutando na porta ${address.port}`)
console.log(`http://localhost:${address.port}`)
