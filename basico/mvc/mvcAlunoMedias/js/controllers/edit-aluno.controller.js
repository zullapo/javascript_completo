export class EditAlunoController {
    constructor(model, view, service) {
        this.model = model
        this.view = view
        this.view.render(model)
        this.service = service
    }

    editarAluno(aluno, nome) {
        aluno.nome = nome

        const notas = {}

        const materiasRow = Array.from(
            this.view.container.querySelectorAll('[data-materia]')
        )
        materiasRow.forEach((row) => {
            const notasRow = Array.from(
                row.querySelectorAll('[data-trimestre]')
            )
            notas[row.getAttribute('data-materia')] = notasRow.map(
                (nota) => parseFloat(nota.value) || 0
            )
        })

        aluno.notas = notas

        return this.service.editarAluno(aluno)
    }

    deletarAluno(id) {
        this.service.deletarAluno(id)
    }
}
