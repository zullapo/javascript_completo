const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    title: { type: String, required: true, maxlength: 30 },
    completed: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, required: false },
    userId: { type: Number, required: true }
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo
