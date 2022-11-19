import { TodoService } from './services/todo.service.js'
import { TodoController } from './controller/todo.controller.js'
import { TodoView } from './view/todo.view.js'

const todoService = new TodoService()

const todoList = document.getElementById('todo-list')
const todoAdd = document.getElementById('todo-add')
const itemInput = document.getElementById('item-input')
const todoItems = document.getElementsByTagName('li')

const todoView = new TodoView(todoList)

const todoController = new TodoController(todoService, todoView)

todoController.getTodos()

todoAdd.addEventListener('submit', (e) => {
    e.preventDefault()
    const todoTitle = itemInput.value
    todoController.addTodo(todoTitle)

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
    const currentTodoId = currentLi.getAttribute('data-id')
    const currentTodoLi = todoService.todos[currentLiIndex]
    const editContainers = document.getElementsByClassName('editContainer')
    const currentEditContainer = editContainers[currentLiIndex]

    const actions = {
        check: () => {
            todoController.toggleDone(currentTodoId)
        },
        edit: () => {
            Array.from(editContainers).forEach((editContainer) => {
                editContainer.style.display = 'none'
            })

            currentEditContainer.style.display = 'flex'
            const editInput = currentEditContainer.querySelector('.editInput')
            editInput.value = currentTodoLi.title
        },
        saveEdit: () => {
            const editInput = currentEditContainer.querySelector('.editInput')
            const updatedTodoTitle = editInput.value
            todoController.updateTodo({ title: updatedTodoTitle }, currentTodoId)
        },
        cancelEdit: () => {
            currentEditContainer.style.display = 'none'
        },
        delete: () => {
            todoController.removeTodo(currentTodoId)
        }
    }

    if (actions[dataAction]) {
        actions[dataAction]()
    }
}

todoList.addEventListener('click', handleUlClick)
