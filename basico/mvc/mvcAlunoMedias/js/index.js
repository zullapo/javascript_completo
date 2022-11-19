import { AlunoService } from "./services/aluno.service.js"
import { AlunoView } from './views/aluno.view.js' 
import { MateriasService } from './services/materias.service.js' 
import { AlunoController } from './controllers/aluno.controller.js'

const tableAlunos = document.querySelector('table[data-table-alunos]')
const formAddAlunos = document.querySelector('.form-add')
const inputFirstName = formAddAlunos.querySelector('#first_name')

String.prototype.capitalize = function () {
    let origStr = this
    return origStr[0].toUpperCase() + origStr.slice(1)
}

// const alunosOld = [
//     {
//         id: 0,
//         nome: 'chico melato',
//         notas: {
//             portugues: [1, 1, 2, 2],
//             matematica: [2, 2, 2, 2],
//             historia: [2, 2, 3, 3],
//             ciencias: [3, 3, 3, 3]
//         }
//     },
//     {
//         id: 1,
//         nome: 'talita lima',
//         notas: {
//             portugues: [4, 4, 4, 4],
//             matematica: [4, 4, 5, 5],
//             historia: [5, 5, 6, 6],
//             ciencias: [7, 7, 8, 9]
//         }
//     }
// ]

const alunoService = new AlunoService()

// const alunos = alunosOld.map((aluno) => alunoService.adicionarAluno(new Aluno(aluno.id, aluno.nome, aluno.notas)))

const alunoView = new AlunoView(tableAlunos, new MateriasService().materias)
const alunoController = new AlunoController(alunoService, alunoView)

formAddAlunos.addEventListener('submit', (e) => {
    e.preventDefault()
    const nome = inputFirstName.value
    alunoController.adicionarAluno({ nome })
})

const inputBuscaAluno = document.querySelector('#search_name')

inputBuscaAluno.addEventListener('input', function () {
    const nome = this.value
    sessionStorage.setItem('alunos-busca', nome)
    alunoController.filtrarAlunoPeloNome(nome)
})

const utlimaBuscaRealizada = sessionStorage.getItem('alunos-busca')

const inputEvent = new Event('input')

if (utlimaBuscaRealizada) {
    inputBuscaAluno.value = utlimaBuscaRealizada
    inputBuscaAluno.dispatchEvent(inputEvent)
}

const btnsDeletar = document.querySelectorAll(`button[data-action='deletar']`)
Array.from(btnsDeletar).forEach((btn) => {
    btn.addEventListener('click', function() {
        const trAluno = this.parentElement
        const alunoId = trAluno.getAttribute('data-aluno-id')
        alunoController.deletarAluno(parseInt(alunoId))
        trAluno.remove()
    })
})
