import { createFetch } from './createFetch.js'

const formCep = document.getElementById('form-cep')
const formInputsCep = Array.from(formCep.getElementsByTagName('input'))
const painelErro = document.querySelector('#bs-feedback')

const formMap = formInputsCep.reduce((ac, vlr) => {
    ac[vlr.id] = vlr
    return ac
}, {})

const inputCep = formMap['cep']

const comparaCep = (cep) => {
    const cepPesquisado = JSON.parse(localStorage.getItem('cep_pesquisado'))
    return cep !== cepPesquisado
}

const removeNumeracaoCep = (cep) => {
    if (cep.indexOf('-') === 5) {
        return cep.replace('-', '').length === 8
    }
    return cep.length === 8
}

const salvarCepPesquisado = (cep) => {
    localStorage.setItem('cep_pesquisado', JSON.stringify(cep))
}

inputCep.addEventListener('focusout', function (e) {
    const cep = inputCep.value
    inputCep.value = cep.trim()
    if (comparaCep(cep)) {
        if (!removeNumeracaoCep(cep)) {
            return mostraErro('Somente números')
        }
        buscarCep(cep)
            .then((dados) => {
                if (dados.erro) throw Error('CPF inexistente')
                preencheCampos(dados)
            })
            .catch((err) => mostraErro(err.message))
        salvarCepPesquisado(cep)
    }
})

async function buscarCep(cep) {
    return await createFetch('GET', `https://viacep.com.br/ws/${cep}/json/`)
}

function preencheCampos(dados) {
    console.log(dados)
    for (const key of Object.keys(dados)) {
        if (formMap[key]) {
            formMap[key].value = dados[key]
        }
    }
}

function mostraErro(erroMensagem) {
    painelErro.querySelector('.content').textContent = erroMensagem
    painelErro.style.transform = 'translateY(0)'
}

function escondeErro() {
    painelErro.removeAttribute('style')
}

painelErro.querySelector('.close').addEventListener('click', () => escondeErro())
