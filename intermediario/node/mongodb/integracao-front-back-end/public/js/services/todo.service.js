import { Todo } from '../model/todo.model.js'
import { createFetch } from '../createFetch.js'

export class TodoService {
    todoUrl = `http://localhost:3000/todos`

    constructor() {
        this.todos = []
    }

    addTodo(todo, success, error) {
        const todoDto = todo.toDto()
        const todoJson = JSON.stringify(todoDto)
        createFetch('POST', this.todoUrl, todoJson)
            .then(() => this.getTodos())
            .then(() => success())
            .catch((err) => error(err.message))
    }

    async getTodos(success, error) {
        const cbSuccess = (todos) => {
            this.todos = todos.map((todo) => {
                const { _id, title, completed, createdAt, updatedAt, userId } = todo
                return new Todo({
                    title,
                    completed,
                    createdAt,
                    updatedAt,
                    id: _id,
                    userId
                })
            })
            if (typeof success === 'function') {
                success(this.todos)
            }
            return this.todos
        }
        return createFetch('GET', this.todoUrl)
            .then((todos) => cbSuccess(todos))
            .catch((err) => {
                if (typeof error === 'function') {
                    return error(err.message)
                }
                throw error(err.message)
            })
    }

    removeTodo(id, success, error) {
        const deleteTodoUrl = `${this.todoUrl}/${id}`
        createFetch('DELETE', deleteTodoUrl)
            .then(() => this.getTodos())
            .then(() => success())
            .catch((err) => error(err.message))
    }

    updateTodo(todo, id, success, error) {
        const updatedTodo = this.getTodoAndUpdate(todo, id)
        console.log(updatedTodo)
        const putTodoUrl = `${this.todoUrl}/${id}`
        const todoJson = JSON.stringify(updatedTodo)
        createFetch('PUT', putTodoUrl, todoJson)
            .then(() => this.getTodos())
            .then(() => success())
            .catch((err) => error(err.message))
    }

    patchTodo(todo, id, success, error) {
        const patchTodoUrl = `${this.todoUrl}/${id}`
        const todoJson = JSON.stringify(todo)
        createFetch('PATCH', patchTodoUrl, todoJson)
            .then(() => this.getTodos())
            .then(() => success())
            .catch((err) => error(err.message))
    }

    getTodoAndUpdate(updatedTodo, id) {
        let todo = this.todos.find((todo) => todo.id === id)
        if (!todo) {
            return null
        }
        todo = todo.toDto()

        for (const key in updatedTodo) {
            if (key in todo && updatedTodo[key] !== undefined) {
                todo[key] = updatedTodo[key]
            }
        }
        return todo
    }

    async getTodoById(id) {
        const getTodoByIdUrl = `${this.todoUrl}/${id}`
        return createFetch('GET', getTodoByIdUrl)
            .then((todo) => {
                const { _id, title, completed, createdAt, updatedAt, userId } = todo
                return new Todo({
                    title,
                    completed,
                    createdAt,
                    updatedAt,
                    id: _id,
                    userId
                })
            })
            .catch((err) => console.log(err.message))
    }
}
