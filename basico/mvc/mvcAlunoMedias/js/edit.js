import { AlunoService } from './services/aluno.service.js'
import { EditAlunoView } from './views/edit-aluno.view.js'
import { EditAlunoController } from './controllers/edit-aluno.controller.js'
import { MateriasService } from './services/materias.service.js'

const alunosService = new AlunoService()

const urlParams = window.location.search
const urlSearchParams = new URLSearchParams(urlParams)
const id = parseInt(urlSearchParams.get('id'))

const alunoParaEditar = alunosService.buscarAlunoPeloId(id)

const inputAlunoFirstName = document.getElementById('first_name')

inputAlunoFirstName.value = alunoParaEditar.nome

const formEditAlunoForm = document.querySelector('form[data-edit-aluno-form]')

const editAlunoView = new EditAlunoView(
    formEditAlunoForm,
    new MateriasService().materias
)

const editAlunoController = new EditAlunoController(
    alunoParaEditar,
    editAlunoView,
    alunosService
)

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const nome = inputAlunoFirstName.value
    editAlunoController.editarAluno(alunoParaEditar, nome)
    window.location.assign('index.html')
})

document
    .querySelector(`button[data-action='deletar']`)
    .addEventListener('click', (e) => {
        editAlunoController.deletarAluno(alunoParaEditar.id)
        window.location.assign('index.html')
    })
