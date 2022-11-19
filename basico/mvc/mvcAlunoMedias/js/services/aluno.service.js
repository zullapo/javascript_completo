import { Aluno } from '../models/aluno.model.js'

export class AlunoService {
    constructor() {
        this.alunos = []
        this.obterAlunosLocalStorage()
    }

    adicionarAluno(aluno) {
        this.alunos.push(aluno)
        this.atualizarLocalStorage()
    }

    editarAluno(aluno) {
        aluno.calcularMedias()
        this.atualizarLocalStorage()
    }

    deletarAluno(id) {
        const aluno = this.buscarAlunoPeloId(id)
        const posAluno = this.alunos.indexOf(aluno)
        this.alunos.splice(posAluno, 1)
        this.atualizarLocalStorage()
    }

    buscarAlunoPeloId(id) {
        return this.alunos.find((aluno) => aluno.id === id)
    }

    buscarAlunoPeloNome(nome) {
        return this.alunos.filter((aluno) => aluno.nome.indexOf(nome) >= 0)
    }

    atualizarLocalStorage() {
        const alunos = JSON.stringify(this.alunos)
        localStorage.setItem('alunos', alunos)
    }

    obterAlunosLocalStorage() {
        const itemLocalStorage = localStorage.getItem('alunos')
        if (itemLocalStorage) {
            const alunos = JSON.parse(itemLocalStorage)
            alunos.forEach((aluno) => this.adicionarAluno(new Aluno(aluno)))
        }
    }
}
