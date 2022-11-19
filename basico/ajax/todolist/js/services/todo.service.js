import { createXMLHttpRequest } from '../createXMLHttpRequest.js'
import { createPromise } from '../createPromise.js'
import { Todo } from '../model/todo.model.js'
import { createFetch } from '../createFetch.js'

export class TodoService {
    baseUrl = `http://localhost:3000`

    constructor() {
        this.todos = []
    }

    addTodo(todo, userId, success, error) {
        const postTodoUrl = `${this.baseUrl}/users/${userId}/tasks`
        const todoDto = todo.toDto()
        const todoJson = JSON.stringify(todoDto)
        // createXMLHttpRequest('POST', postTodoUrl, cbSuccess, error, todoJson)
        // createPromise('POST', postTodoUrl, todoJson)
        //     .then(() => this.getTodos(userId))
        //     .then(() => success())
        //     .catch((err) => error(err.message))
        createFetch('POST', postTodoUrl, todoJson)
            .then(() => this.getTodos(userId))
            .then(() => success())
            .catch((err) => error(err.message))
    }

    getTodos(userId, success, error) {
        const getTodosUrl = `${this.baseUrl}/users/${userId}/tasks`
        const cbSuccess = (todos) => {
            this.todos = todos.map((todo) => {
                const { title, completed, createdAt, updatedAt, id } = todo
                return new Todo(title, completed, createdAt, updatedAt, id)
            })
            if (typeof success === 'function') {
                success(this.todos)
            }
            return this.todos
        }
        // createXMLHttpRequest('GET', getTodosUrl, cbSuccess, error)
        // return createPromise('GET', getTodosUrl)
        //     .then((todos) => cbSuccess(todos))
        //     .catch((err) => error(err.message))
        return createFetch('GET', getTodosUrl)
            .then((todos) => cbSuccess(todos))
            .catch((err) => error(err.message))
    }

    removeTodo(userId, id, success, error) {
        const removeTodoUrl = `${this.baseUrl}/tasks/${id}`
        // createXMLHttpRequest('DELETE', removeTodoUrl, cbSuccess, error)
        // createPromise('DELETE', removeTodoUrl)
        //     .then(() => this.getTodos(userId))
        //     .then(() => success())
        //     .catch((err) => error(err.message))
        createFetch('DELETE', removeTodoUrl)
            .then(() => this.getTodos(userId))
            .then(() => success())
            .catch((err) => error(err.message))
    }

    updateTodo(todo, userId, success, error) {
        const editTodoUrl = `${this.baseUrl}/tasks/${todo.id}`
        const todoJson = JSON.stringify(todo)
        // createXMLHttpRequest('PATCH', editTodoUrl, cbSuccess, error, todoJson)
        // createPromise('PATCH', editTodoUrl, todoJson)
        // .then(() => this.getTodos(userId))
        // .then(() => success())
        // .catch((err) => error(err.message))
        createPromise('PATCH', editTodoUrl, todoJson)
            .then(() => this.getTodos(userId))
            .then(() => success())
            .catch((err) => error(err.message))
    }

    getTodo(id) {
        return this.todos.find((todo) => parseInt(todo.id) === id)
    }
}
