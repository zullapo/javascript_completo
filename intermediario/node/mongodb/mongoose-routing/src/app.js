const express = require('express')
const tasksRouter = require('./routers/tasks.router')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.status(200).send({ mensagem: 'App working!' })
})
app.use((err, req, res) => {
    res.status(500).send({ mensagem: 'Erro 500', erro: err })
})
app.use('/tasks', tasksRouter)

module.exports = app
