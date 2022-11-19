const connect = require('./src/db/connect')
const app = require('./src/app')

async function main() {
    const url = process.env.MONGO_URL
    await connect(url)
    app.listen(process.env.PORT)
    return `Server + database connected successfully`
}

main().then(console.log).catch(console.error)
