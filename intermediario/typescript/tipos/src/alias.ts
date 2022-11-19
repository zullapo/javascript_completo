type tipoAlias = number | string

let num2 : tipoAlias = 10
num2 = '10'

type pessoa = {
    nome: string,
    idade: tipoAlias,
    sexo: Sexo
}

type Sexo = 'Masculino' | 'Feminino'

const jose: pessoa = {
    nome: 'jose',
    idade: '40',
    sexo: 'Masculino'
}
