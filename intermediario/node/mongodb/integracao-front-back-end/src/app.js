const express = require('express')
const path = require('path')
const todosRouter = require('./routers/todo.controller')

const app = express()

app.use(express.static(path.join(__dirname, '../public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((err, req, res, next) => {
    res.status(500).send({ mensagem: 'Erro 500', erro: err })
})
app.use('/todos', todosRouter)

const connectServer = (port, cb = undefined) => app.listen(port, cb)

module.exports = connectServer