import { Todo } from '../model/todo.model.js'
import { userId } from '../config/config.js'

export class TodoController {
    constructor(service, view) {
        this.service = service
        this.view = view
        this.success = () => this.view.render(this.service.todos)
        this.error = (error) => console.log(error)
    }

    addTodo(title) {
        this.service.addTodo(
            new Todo({ title, userId: userId }),
            this.success,
            this.error
        )
    }

    removeTodo(id) {
        this.service.removeTodo(id, this.success, this.error)
    }

    updateTodo(todo, id) {
        todo.updateAt = Date.now()
        this.service.updateTodo(todo, id, this.success, this.error)
    }

    getTodos() {
        this.service.getTodos(this.success, this.error)
    }

    async toggleDone(id) {
        const todo = await this.service.getTodoById(id)
        const { completed } = todo
        this.service.patchTodo(
            { completed: !completed },
            todo.id,
            this.success,
            this.error
        )
    }
}
