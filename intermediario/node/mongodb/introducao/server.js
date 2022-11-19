// const app = require('./src/app')

// app.listen(3001)

// Exemplo usando pacote do driver do mongodb:
const { MongoClient } = require('mongodb')

// URL de conexão
const url = process.env.MONGO_URL
const client = new MongoClient(url)

// Nome do banco de dados
const nomeDb = 'ClusterTodo'

async function main() {
    await client.connect()
    console.log('Connected successfully to server')
    const db = client.db(nomeDb)
    const colecaoTodos = db.collection('todos')
    // A partir da coleção é possível executar métodos como esse:
    // const insertTodos = await collection.insertMany([
    //     { title: 'primeiro todo', completed: false },
    //     { title: 'segundo todo', completed: true }
    // ])
    // console.log(insertTodos)
    return `Done`
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close())
