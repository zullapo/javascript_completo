import { TodoService } from './services/todo.service.js'
import { TodoController } from './controller/todo.controller.js'
import { TodoView } from './view/todo.view.js'

const userId = 2

const todoService = new TodoService()

const todoList = document.getElementById('todo-list')
const todoAdd = document.getElementById('todo-add')
const itemInput = document.getElementById('item-input')
const todoItems = document.getElementsByTagName('li')

const todoView = new TodoView(todoList)

const todoController = new TodoController(todoService, todoView)

todoController.getTodos(userId)

todoAdd.addEventListener('submit', (e) => {
    e.preventDefault()
    const todoTask = itemInput.value
    todoController.addTodo(todoTask, userId)

    itemInput.value = ''
    itemInput.focus()
})

function handleUlClick(e) {
    const dataAction = e.target.getAttribute('data-action')

    if (!dataAction) return

    let currentLi = e.target

    while (currentLi.nodeName !== 'LI') {
        currentLi = currentLi.parentElement
    }
    const currentLiIndex = Array.from(todoItems).indexOf(currentLi)
    const currentTodoId = parseInt(currentLi.getAttribute('data-id'))
    const currentTodoLi = todoService.todos[currentLiIndex]
    const editContainers = document.getElementsByClassName('editContainer')
    const currentEditContainer = editContainers[currentLiIndex]

    const actions = {
        check: () => {
            todoController.toggleDone(currentTodoId, userId)
        },
        edit: () => {
            Array.from(editContainers).forEach((editContainer, _) => {
                editContainer.style.display = 'none'
            })

            currentEditContainer.style.display = 'flex'
            const editInput = currentEditContainer.querySelector('.editInput')
            editInput.value = currentTodoLi.title
        },
        saveEdit: () => {
            const editInput = currentEditContainer.querySelector('.editInput')
            const newTodoTask = editInput.value
            todoController.updateTodo({ title: newTodoTask, id: currentTodoId }, userId)
        },
        cancelEdit: () => {
            currentEditContainer.style.display = 'none'
        },
        delete: () => {
            todoController.removeTodo(userId, currentTodoId)
        }
    }

    if (actions[dataAction]) {
        actions[dataAction]()
    }
}

todoList.addEventListener('click', handleUlClick)
