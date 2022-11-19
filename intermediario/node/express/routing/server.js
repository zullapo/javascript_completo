const express = require('express')
const tasks = require('./data/tasks.json')
const fs = require('fs')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/tasks', (req, res) => {
    res.json(tasks)
})

app.post('/tasks', (req, res) => {
    const { title, userId } = req.body

    const newTask = {
        title,
        completed: false,
        createdAt: Date.now(),
        updatedAt: null,
        userId,
        id: tasks[tasks.length - 1].id++
    }

    tasks.push(newTask)

    const writeStream = fs.createWriteStream('data/tasks.json')
    writeStream.write(JSON.stringify(tasks))

    res.send(newTask)
})

// app.get('/tasks/:id', (req, res) => {
//     res.send(tasks.filter((task) => task.id === parseInt(req.params.id)))
// })

app.route('/tasks/:id')
    .get((req, res) => {
        res.send(tasks.filter((task) => task.id === parseInt(req.params.id)))
    })
    .put((req, res) => {
        const { title, completed, createdAt, updatedAt, userId, id } = req.body
        const newTask = { title, completed, createdAt, updatedAt, userId, id }
        const taskIndex = tasks.findIndex((task) => task.id === parseInt(req.params.id))
        const taskId = tasks[taskIndex].id
        if (newTask.id == taskId) {
            tasks.splice(taskIndex, 1, newTask)
        }

        const writeStream = fs.createWriteStream('data/tasks.json')
        writeStream.write(JSON.stringify(tasks))

        res.send(newTask)
    })
    .patch((req, res) => {
        const { title, completed, userId } = req.body
        const taskIndex = tasks.findIndex((task) => task.id === parseInt(req.params.id))
        const task = tasks[taskIndex]

        if (title !== undefined) {
            task.title = title
        }
        if (completed !== undefined) {
            task.completed = completed
        }
        if (userId !== undefined) {
            task.userId = userId
        }

        task.updatedAt = Date.now()

        tasks.splice(taskIndex, 1, task)

        const writeStream = fs.createWriteStream('data/tasks.json')
        writeStream.write(JSON.stringify(tasks))

        res.send(task)
    }).delete((req, res) => {
        const taskIndex = tasks.findIndex((task) => task.id === parseInt(req.params.id))

        const deletedTask = tasks.splice(taskIndex, 1)
        
        res.send(deletedTask)
    })

app.listen(3001)
