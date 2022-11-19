/*
Objetos em JavaScript, são estruturas que recebem dados no formato chave-valor,
ou ainda, propriedade e valor caso for utilizado um objeto de primeira classe.
*/

// Existem várias formas de declarar um objeto>

// Forma literal
const pessoa = { nome: "Paulo", idade: 1231094, sexo: "Masculino" }

// Classe objeto
const funcionario = new Object()
funcionario.codigo = 1
funcionario.nome = "José"
funcionario.salario = 10000
funcionario["cargo"] = "Programador"

console.log(pessoa)
console.log(funcionario)

//------------------------------------------------------------------------------

// Operador new
const data = Date()
console.log(data, typeof data)

const data2 = new Date()
console.log(data2, typeof data2)

// Tipo valor x tipo referência
const x = 10
const y = [10, 20, 30]

function incrementa(n) {
	if (n instanceof Array) {
		n.push(40)
	} else {
		n++
	}
	console.log("valor interno:", n)
}

incrementa(x)
// incrementa(10)
// Como valor externo de x não mudou através da função, logo x é um tipo valor.
console.log("valor externo:", x)

incrementa(y)
// y é tipo referência, pois é um objeto e teve seu valor alterado externamente.
console.log("valor externo:", y)

//------------------------------------------------------------------------------

// Outra forma para criação de objetos:

// Funções construtoras
function Todo(task, done) {
    "use strict"
    // Utilizando use strict, faz com que a função seja chamada/instanciada,
    // somente com o operador new, pois o this será undefined ao invés de global.
    console.log(this)

    if (this === undefined) return

	// Atributos privados
	let _task = task
    let _done = done

	// Criação dinâmica de propriedades
	this._createdAt = new Date()
	this._updateAt = null

	// Getters and setters
	this.setTask = function (task) {
		if (task) {
			_task = task
			this.updateAt = new Date()
		}
	}
	
    this.getTask = function () {
		return _task
	}

	this.setDone = function (done) {
		_done = done
	}

    this.getDone = function () {
        return _done
    }
}

const exampleTodo = new Todo("Example", false)
exampleTodo.setTask("Take coffee", false)
exampleTodo.setDone(!exampleTodo.getDone())

console.log("task:", exampleTodo.getTask())
console.log("done:", exampleTodo.getDone())

console.log(exampleTodo)

/*
Problema de não usar o operador new em uma função contrutora:
Poluição no escopo de variáveis, pois o this será global.
*/
const exampleTodo2 = Todo()

console.log(exampleTodo2)
console.log(_createdAt)
