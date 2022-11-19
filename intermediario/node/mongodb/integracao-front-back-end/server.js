const connectDB = require('./src/db/connect')
const connectServer = require('./src/app')

function main() {
    const dbUrl = process.env.MONGO_URL
    const serverPort = process.env.PORT
    connectDB(dbUrl).then(({ connection }) => {
        const { databaseName } = connection.db
        console.log(
            `Connected to database: ${connection.host}:${connection.port}/${databaseName}`
        )
        connectServer(serverPort, () => {
            console.log(`Connected to express (server): http://localhost:${serverPort}`)
        })
    })
}

main()
