import { createFetch } from './createFetch.js'

class User {
    constructor(id, email) {
        this.id = id
        this.email = email
    }
}

class UserService {
    constructor() {
        this.users = []
    }

    async getUsers() {
        const usersUrl = 'http://localhost:3000/users/'
        return await createFetch('GET', usersUrl)
            .then((users) => {
                this.users = users.map((user) => new User(user.id, user.email))
                return this.users
            })
            .catch((err) => console.log(err))
    }
}

const userService = new UserService()
// userService
//     .getUsers()
//     .then((users) => console.log(users))
//     .catch((err) => console.log(err))

// finally:
// userService
//     .getUsers()
//     .then((users) => console.log(users))
//     .catch((err) => console.log(err))
//     .finally(() => console.log('i execute everytime'))

// tratamento de erros:
;(async () => {
    try {
        const users = await userService.getUsers()
        console.log(users)
    } catch (e) {
        console.log(e)
    }
})()
