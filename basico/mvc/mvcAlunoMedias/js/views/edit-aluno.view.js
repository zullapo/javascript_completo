export class EditAlunoView {
    constructor(form, materias) {
        this.form = form
        this.container = form.querySelector('div[data-edit-notas]')
        this.materiais = materias
    }

    render(aluno) {
        const html = this.materiais
            .map(
                (materia) => `
        <div class="row" data-materia="${materia}">
            <div class="input-field col s4">
                <input
                    id="${materia}"
                    type="text"
                    class="validate"
                    disabled
                    value="${materia}"
                />
            </div>
            <div class="input-field col s2">
                <input data-trimestre="0"
                    id="nota_${materia}_0"
                    type="number"
                    class="validate"
                    maxLength="2"
                    min="0"
                    max="10"
                    value="${aluno.notas[materia]?.[0]}"
                />
            </div>
            <div class="input-field col s2">
                <input data-trimestre="1"
                    id="nota_${materia}_1"
                    type="number"
                    class="validate"
                    maxLength="2"
                    min="0"
                    max="10"
                    value="${aluno.notas[materia]?.[1]}"
                />
            </div>
            <div class="input-field col s2">
                <input data-trimestre="2"
                    id="nota_${materia}_2"
                    type="number"
                    class="validate"
                    maxLength="2"
                    min="0"
                    max="10"
                    value="${aluno.notas[materia]?.[2]}"
                />
            </div>
            <div class="input-field col s2">
                <input data-trimestre="3"
                    id="nota_${materia}_3"
                    type="number"
                    class="validate"
                    maxLength="2"
                    min="0"
                    max="10"
                    value="${aluno.notas[materia]?.[3]}"
                />
            </div>
        </div>
        `
            )
            .join('')
        this.container.innerHTML = html
    }
}
