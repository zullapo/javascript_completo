// Tipo genérico default
interface Action<T = object> {
    action: T
}

const step: Action<object> = {
    action: { name: 'edit' }
}

step.action = { name: 'delete' }
console.log(step)

const step2: Action<string> = {
    action: 'add'
}

step2.action = 'get'
console.log(step2)

const step3: Action = {
    action: { name: 'add', count: 0 }
}

console.log(step3)

type NumberOrString = number | string

// Tipo genérico default + extends
interface ActionI<T extends NumberOrString = string, U = number> {
    action: T
    timestamp: U
}

const step4: ActionI = {
    action: 'delete',
    timestamp: 123
}

const actions: Array<ActionI> = []

// const addAction = (obj: ActionI) => {
//     console.log(obj)
//     actions.push(obj)
// }

const addAction = <T extends ActionI>(obj: T) => {
    console.log(obj)
    actions.push(obj)
}

addAction({
    action: 'add',
    timestamp: 123,
    payload: { count: 0}
})
