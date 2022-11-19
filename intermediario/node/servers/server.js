const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
    switch (req.url) {
        case '/':
        case '/index.html':
            res.writeHead(200, { 'Content-Type': 'text/html' })
            return fs.readFile('./index.html', (err, html) => {
                if (err) {
                    throw err
                }
                const toTemplateString = new Function('return `' + html + '`')
                res.end(toTemplateString.call(req))
            })
        case '/estilo/estilo.css':
            res.writeHead(200, { 'Content-Type': 'text/css' })
            return res.end(
                `
                body {
                    color: red;
                }
            `.trim()
            )
        case '/static/logo.png':
            res.writeHead(200, { 'Content-Type': 'image/png' })
            return fs.createReadStream('files/logo.png').pipe(res)
        default:
            res.writeHead(404, { 'Content-Type': 'text/html' })
            res.write('<h1>404</h1>')
    }
}).listen(3000)

console.log('Servidor escutando na porta 3000\nhttp://localhost:3000')
