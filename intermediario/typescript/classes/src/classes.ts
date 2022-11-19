// class Pessoa {
//     nome: string
//     constructor(nome: string) {
//         this.nome = nome
//     }
// }

/*
public: permite ler e modificar propriedades, dentro e fora da classe
readonly: permite ler propriedades, dentro e fora da classe
private: permite ler e modificar propriedades, apenas dentro da classe
protected: permite ler e modificar propriedades, dentro da hierarquia de classes
*/

// Uma classe abstrata não pode ser instanciada, mas serve de base para classes que a herdam.
abstract class Pessoa {
    // Atalho para declaração de propriedades
    constructor(public _nome: string) { }

    // Propriedade deve ser declarada com underscore para diferenciar propriedade get da propriedade da classe
    get nome() {
        return this._nome
    }

    // Método abstrato deve ser sobrescrito nas subclasses
    abstract mostraDetalhes(): string
}

// A palavra extends significa que a subclasse está herdando propriedades e métodos da superclasse.
class PessoaFisica extends Pessoa {
    constructor(_nome: string, private _cpf: string) {
        super(_nome)
    }

    get cpf() {
        return this._cpf
    }

    mostraDetalhes(): string {
        return this.nome + ', ' + this.cpf
    }
}

class PessoaJuridica extends Pessoa {
    constructor(_nome: string, private _cnpj: string) {
        super(_nome)
    }

    get cnpj() {
        return this._cnpj
    }

    mostraDetalhes(): string {
        return this.nome + ', ' + this.cnpj
    }
}

const jose = new PessoaFisica('Jose', '35963586046')
// console.log(jose.toString())

const pedro = new PessoaFisica('Pedro', '98166430000182')
// console.log(pedro.toString())

class PessoaController {
    private _listaPessoas: Pessoa[] = []

    addPessoa(...pessoas: Pessoa[]): void {
        this._listaPessoas.push(...pessoas)
    }

    // get listaPessoas() {
    //     return this._listaPessoas
    // }

    get listaPessoas() {
        return [...this._listaPessoas]
    }

    getPessoas(): string {
        return this._listaPessoas.map((pessoa) => pessoa.toString()).join('\n')
    }
}

const pessoaController = new PessoaController()
pessoaController.addPessoa(jose, pedro)
console.log(pessoaController.getPessoas())

