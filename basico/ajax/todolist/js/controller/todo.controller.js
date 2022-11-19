import { Todo } from '../model/todo.model.js'

export class TodoController {
    constructor(service, view) {
        this.service = service
        this.view = view
        this.success = () => this.view.render(this.service.todos)
        this.error = (error) => console.log(error)
    }

    addTodo(title, userId) {
        this.service.addTodo(new Todo(title), userId, this.success, this.error)
    }

    removeTodo(userId, id) {
        this.service.removeTodo(parseInt(userId), id, this.success, this.error)
    }

    updateTodo(todo, userId) {
        todo.updateAt = Date.now()
        this.service.updateTodo(todo, userId, this.success, this.error)
    }

    getTodos(userId) {
        this.service.getTodos(userId, this.success, this.error)
    }

    toggleDone(id, userId) {
        const todo = this.service.getTodo(parseInt(id))
        const { completed } = todo
        this.updateTodo({ completed: !completed, id: parseInt(id) }, userId)
    }
}
