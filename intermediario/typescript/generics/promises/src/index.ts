import axios from 'axios'

const url = 'http://localhost:3001/users/'

type ResponseUser = { nome: string; email: string; id: number }

axios.get<Array<ResponseUser>>(url).then((response) => console.log(response.data))

axios
    .post<ResponseUser>(url, { nome: 'pedro', email: 'teste.ti@gmail.com' })
    .then((response) => console.log(response.data))

async function getUser(id: number) {
    try {
        const response = await axios.get<ResponseUser>(url + id)
        return response.data
    } catch (e) {
        throw e
    }
}

getUser(1).then((response) => console.log(response))
