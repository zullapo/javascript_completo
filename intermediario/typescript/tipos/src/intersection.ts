/* Intersection

Usado na criação de tipos a partir de dois ou mais tipos, fazendo com que o tipo criado
herde as características dos outros tipos.
*/

type User = {
    login: string
}

type Admin = {
    isAdmin: true
}

type UserAdmin = User & Admin

const superAdmin: UserAdmin = {
    login: 'jose.carvalho',
    isAdmin: true
}
