import { CalcService } from '../services/calc.service.js'

export class Aluno {
    constructor({ nome, id, notas } = { notas: {} }) {
        this.id = id !== undefined ? id : this.gerarId()
        this.nome = nome
        this.notas = { ...notas }

        if (this.id > Aluno._id) {
            Aluno._id = this.id
        }
        
        this.medias = {}

        this.calcularMedias()
    }

    gerarId() {
        return Aluno._id + 1
    }

    calcularMedias() {
        for (const materia in this.notas) {
            this.medias[materia] = CalcService.average(...this.notas[materia])
        }
    }
}

Aluno._id = 0
