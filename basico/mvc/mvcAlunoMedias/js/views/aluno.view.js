export class AlunoView {
    constructor(tableAlunos, materias) {
        this.tableAlunos = tableAlunos
        this.theadAlunos = this.tableAlunos.querySelector('thead')
        this.tbodyAlunos = this.tableAlunos.querySelector('tbody')
        this.materias = materias
        this.preencherTheadTabela()
    }

    preencherTheadTabela() {
        const trAluno = document.createElement('tr')
        trAluno.innerHTML = '<td>nome</td>'

        this.materias.forEach((materia) => {
            trAluno.innerHTML += `<td>${materia}</td>`
        })

        this.theadAlunos.appendChild(trAluno)
    }

    render(alunos) {
        this.tbodyAlunos.innerHTML = ''
        alunos.forEach((aluno) => {
            const tbodyTrAlunos = document.createElement('tr')
            tbodyTrAlunos.innerHTML += `<td><a href="edit.html?id=${aluno.id}">${aluno.nome}</a></td>`

            const existeNota = this.materias.some(
                (materia) => materia in aluno.notas
            )

            if (existeNota) {
                this.materias.forEach((materia) => {
                    tbodyTrAlunos.innerHTML += `<td>${
                        aluno.medias[materia] !== undefined
                            ? aluno.medias[materia]
                            : `<a href='edit.html?id=${aluno.id}'>Incluir nota</a>`
                    }</td>`
                })
            } else {
                tbodyTrAlunos.innerHTML += `<td colspan='${this.materias.length}'>
                    <a href='edit.html?id=${aluno.id}'>Incluir nota</a>
                </td>`
            }

            this.tbodyAlunos.appendChild(tbodyTrAlunos)
        })
    }
}
