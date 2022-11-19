const todoList = document.getElementById('todo-list')
const todoAdd = document.getElementById('todo-add')
const itemInput = document.getElementById('item-input')
const todoItems = document.getElementsByTagName('li')

function Todo(task, createdAt, done) {
    'use strict'
    if (this === undefined) return
    if (task === '') {
        throw new Error('Required parameter for creating todo: task')
    }

    let _task = task
    let _createdAt = createdAt || new Date()
    let _done = done || false

    this.setTask = (task) => {
        _task = task
    }
    this.getTask = () => {
        return _task
    }
    this.getCreatedAt = () => {
        return _createdAt
    }
    this.toggleDone = () => {
        _done = !_done
    }
    this.getDone = () => {
        return _done
    }
}

const defaultTodos = [
    {
        task: 'Example 1',
        createdAt: new Date(),
        done: false
    },
    {
        task: 'Example 2',
        createdAt: new Date(),
        done: true
    },
    {
        task: 'Example 3',
        createdAt: new Date(),
        done: false
    }
]

function getSavedTodos() {
    const savedTodos = JSON.parse(localStorage.getItem('todos'))
    return savedTodos || defaultTodos
}

const todos = getSavedTodos().map((todo, _) => {
    return new Todo(todo.task, todo.createdAt, todo.done)
})

function saveTodos() {
    localStorage.setItem(
        'todos',
        JSON.stringify(
            todos.map((todo, _) => ({
                task: todo.getTask(),
                createdAt: todo.getCreatedAt(),
                done: todo.getDone()
            }))
        )
    )
}

saveTodos()

function createTodoItem(todo) {
    const todoItem = document.createElement('li')
    todoItem.classList.add('todo-item')

    const todoCheck = document.createElement('button')
    todoCheck.classList.add('button-check')
    todoCheck.innerHTML = `<i class="fas fa-check ${
        todo.getDone() ? '' : 'displayNone'
    }"></i>`
    todoCheck.setAttribute('data-action', 'check')
    todoItem.appendChild(todoCheck)

    const todoTask = document.createElement('p')
    todoTask.classList.add('task-name')
    todoTask.textContent = todo.getTask()
    todoItem.appendChild(todoTask)

    const todoEdit = document.createElement('i')
    todoEdit.classList.add('fas', 'fa-edit')
    todoEdit.setAttribute('data-action', 'edit')
    todoItem.appendChild(todoEdit)

    const editContainer = document.createElement('div')
    editContainer.classList.add('editContainer')

    const editInput = document.createElement('input')
    editInput.classList.add('editInput')
    editInput.setAttribute('type', 'text')
    editContainer.appendChild(editInput)

    const editButton = document.createElement('button')
    editButton.classList.add('editButton')
    editButton.setAttribute('data-action', 'saveEdit')
    editButton.textContent = 'Edit'
    editContainer.appendChild(editButton)

    const cancelButton = document.createElement('button')
    cancelButton.classList.add('cancelButton')
    cancelButton.setAttribute('data-action', 'cancelEdit')
    cancelButton.textContent = 'Cancel'
    editContainer.appendChild(cancelButton)

    const deleteButton = document.createElement('i')
    deleteButton.classList.add('fas', 'fa-trash-alt')
    deleteButton.setAttribute('data-action', 'delete')
    todoItem.appendChild(deleteButton)

    todoItem.appendChild(editContainer)

    return todoItem
}

function handleUlClick(e) {
    const dataAction = e.target.getAttribute('data-action')

    let currentLi = e.target

    while (currentLi.nodeName !== 'LI') {
        currentLi = currentLi.parentElement
    }

    const currentLiIndex = Array.from(todoItems).indexOf(currentLi)
    const editContainers = document.getElementsByClassName('editContainer')
    const currentEditContainer = editContainers[currentLiIndex]

    const actions = {
        check: () => {
            todos[currentLiIndex].toggleDone()
            saveTodos()
            renderTodos()
        },
        edit: () => {
            Array.from(editContainers).forEach((editContainer, _) => {
                editContainer.style.display = 'none'
            })

            currentEditContainer.style.display = 'flex'
        },
        saveEdit: () => {
            const editInput = currentEditContainer.querySelector('.editInput')
            const newTodoTask = editInput.value
            todos[currentLiIndex].setTask(newTodoTask)
            renderTodos()
            saveTodos()
        },
        cancelEdit: () => {
            currentEditContainer.style.display = 'none'
        },
        delete: () => {
            todos.splice(currentLiIndex, 1)
            renderTodos()
            saveTodos()
        }
    }

    if (actions[dataAction]) {
        actions[dataAction]()
    }
}

function renderTodos() {
    todoList.innerHTML = ''
    todos.map((todo, _) => todoList.appendChild(createTodoItem(todo)))
}

function saveTodo(task) {
    todos.push(new Todo(task))
    saveTodos()
}

todoAdd.addEventListener('submit', () => {
    const todoTask = itemInput.value
    saveTodo(todoTask)
    renderTodos()

    itemInput.value = ''
    itemInput.focus()
})

todoList.addEventListener("click", handleUlClick)

renderTodos()
