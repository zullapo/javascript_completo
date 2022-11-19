const Task = require('../models/schemas/task.schema')

exports.get = (id) => {
    if (id) {
        return Task.findById(id)
    }
    return Task.find()
}

exports.post = (data) => {
    const newTask = { ...data }

    return Task.create(newTask)
}

exports.put = (data, id) => {
    return Task.findByIdAndUpdate(id, data, { new: true })
}

exports.patch = (data, id) => {
    for (const key in data) {
        if (data[key] === undefined) {
            delete data[key]
        }
    }
    return Task.findByIdAndUpdate(id, data, { new: true })
}

exports.delete = (id) => {
    return Task.findByIdAndRemove(id)
}
