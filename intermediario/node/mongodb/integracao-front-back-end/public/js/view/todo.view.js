export class TodoView {
    constructor(container) {
        this.container = container
    }

    render(todos) {
        this.container.innerHTML = ''
        todos.forEach((todo) => {
            this.container.appendChild(this.createTodoItem(todo))
        })
    }

    createTodoItem(todo) {
        const todoItem = document.createElement('li')
        todoItem.setAttribute('data-id', todo.id)
        todoItem.classList.add('todo-item')

        const todoCheck = document.createElement('button')
        todoCheck.classList.add('button-check')
        todoCheck.innerHTML = `<i class="fas fa-check ${
            todo.completed ? '' : 'displayNone'
        }"></i>`
        todoCheck.setAttribute('data-action', 'check')
        todoItem.appendChild(todoCheck)

        const todoTitle = document.createElement('p')
        todoTitle.classList.add('todo-title')
        todoTitle.textContent = todo.title
        todoItem.appendChild(todoTitle)

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
}
