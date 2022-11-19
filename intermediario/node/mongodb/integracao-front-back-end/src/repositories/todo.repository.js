const Todo = require('../models/schemas/todo.schema')

exports.get = (id) => {
    if (id) {
        return Todo.findById(id)
    }
    return Todo.find()
}

exports.post = (data) => {
    const newTodo = { ...data }

    return Todo.create(newTodo)
}

exports.put = (data, id) => {
    return Todo.findByIdAndUpdate(id, data, { new: true })
}

exports.patch = (data, id) => {
    for (const key in data) {
        if (data[key] === undefined) {
            delete data[key]
        }
    }
    return Todo.findByIdAndUpdate(id, data, { new: true })
}

exports.delete = (id) => {
    return Todo.findByIdAndRemove(id)
}
