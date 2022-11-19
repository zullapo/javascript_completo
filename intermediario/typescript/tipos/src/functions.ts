function mult(x: number, y: number) {
    return x + y
}

const multFn = (x: number, y: number) => x * y

const subFn: (x: number, y: number) => number = (x, y) => x - y

type IsAdmin = (user: User) => boolean

// !!: retorna false se user for undefined.
const isAdmin : IsAdmin = (user) => !!(user as UserAdmin).isAdmin

const pedro: UserAdmin = {
    login: 'pedro.fraga',
    isAdmin: true
}

console.log(isAdmin(pedro))

const lucas: User = {
    login: 'lucas.manoel'
}

console.log(isAdmin(lucas))
