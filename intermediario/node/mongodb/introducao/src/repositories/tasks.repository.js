const tasks = require('../../data/tasks.json')
const fs = require('fs')

const storeTasks = () => {
    const writeStream = fs.createWriteStream('data/tasks.json')
    writeStream.write(JSON.stringify(tasks))
}

exports.get = async (taskId) => {
    if (!isNaN(taskId)) {
        return tasks.find((task) => task.id === parseInt(taskId))
    }
    return tasks
}

exports.post = async (task) => {
    const id = tasks[tasks.length - 1].id + 1
    const newTask = { ...task, id }

    tasks.push(newTask)

    storeTasks()

    return newTask
}

exports.put = async (newTask, taskId) => {
    const taskIndex = tasks.findIndex(
        (task) => task.id === parseInt(taskId) && task.id === taskId
    )

    if (taskIndex < 0) {
        return null
    }

    tasks.splice(taskIndex, 1, newTask)

    storeTasks()

    return newTask
}

exports.patch = async (updatedTask, taskId) => {
    const task = tasks.find((task) => task.id == parseInt(taskId))
    const taskIndex = tasks.findIndex((task) => task.id == parseInt(taskId))
    
    const newTask = { ...task, ...updatedTask }

    tasks.splice(taskIndex, 1, newTask)

    storeTasks()

    return newTask
}

exports.delete = async (taskId) => {
    const taskIndex = tasks.findIndex((task) => task.id === parseInt(taskId))

    const deletedTask = tasks.splice(taskIndex, 1)

    storeTasks()

    return deletedTask
}
