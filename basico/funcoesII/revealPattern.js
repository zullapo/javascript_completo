const Todo = function (task, updatedAt, done) {
    'use strict'

    if (this === undefined) return

    let _task = task
    let _updatedAt = updatedAt || new Date()
    let _done = done || false

    // Método privado não é compartilhado
    function _checkEmptyTask(task) {
        return task.trim() === ''
    }

    function setTask(task) {
        if (_checkEmptyTask(task)) return
        _task = task
        _updatedAt = Date.now()
    }

    function getTask() {
        return _task
    }

    function toggleDone() {
        _done = !_done
    }

    function getDone() {
        return _done
    }

    function toString() {
        return `Todo { task: ${_task}, updatedAt: ${_updatedAt.toLocaleString(
            'pt-BR',
            {
                day: '2-digit',
                month: '2-digit',
                year: '2-digit',
                hour: '2-digit',
                minute: '2-digit'
            }
        )}, done: ${_done} }`
    }

    return {
        setTask,
        getTask,
        toggleDone,
        getDone,
        toString
    }
}

const todos = [
    new Todo('Get up for work'),
    new Todo('Drink coffee in the morning'),
    new Todo('Drink 2 liters of water for the day')
]

for (const todo of todos) {
    console.log(todo.toString())
}
