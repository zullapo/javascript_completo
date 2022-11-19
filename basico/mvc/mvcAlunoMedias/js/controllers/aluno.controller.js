import { Aluno } from '../models/aluno.model.js'

export class AlunoController {
    constructor(service, view) {
        this.service = service
        this.view = view
        this.view.render(this.service.alunos)
    }

    adicionarAluno(nome) {
        this.service.adicionarAluno(new Aluno(nome))
        this.view.render(this.service.alunos)
    }

    deletarAluno(id) {
        this.service.deletarAluno(id)
        this.view.render(this.service.alunos)
    }

    filtrarAlunoPeloId(id) {
        const alunosAtualizados = this.service.buscarAlunoPeloId(id)
        this.view.render(alunosAtualizados)
    }

    filtrarAlunoPeloNome(nome) {
        const alunosAtualizados = this.service.buscarAlunoPeloNome(nome)
        this.view.render(alunosAtualizados)
    }
}
