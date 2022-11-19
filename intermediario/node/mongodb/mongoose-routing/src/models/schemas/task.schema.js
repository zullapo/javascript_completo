const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true, maxlength: 30 },
    completed: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, required: false },
    userId: { type: Number, required: true }
})

const Task = mongoose.model("Task", taskSchema)

module.exports = Task
