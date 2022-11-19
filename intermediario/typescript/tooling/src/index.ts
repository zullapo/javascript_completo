import axios from 'axios'

const fn = (n) => n * n
console.log(fn(2))

class Todo {
    title: string
    completed?: boolean
    createdAt?: Date
    updatedAt?: Date

    constructor(
        title: string,
        completed = false,
        createdAt = new Date(),
        updatedAt = new Date()
    ) {
        this.title = title
        this.completed = completed
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
}

const todo = new Todo('Fill bottle')
console.log(todo)

const getAddress = async (cep) => {
    const url = `https://viacep.com.br/ws/${cep}/json`
    try {
        const response = await axios.get(url)
        const result = response.data
        return result
    } catch (e) {
        throw e
    }
}

getAddress('03133000')
    .then((r) => {
        console.log(r)
    })
    .catch((e) => {
        console.log(e)
    })
