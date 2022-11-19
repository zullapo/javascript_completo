const ID = Symbol()
const todo = {
    [ID]: '123',
    'task': 'get products',
    done: false
}

console.log(todo[ID])