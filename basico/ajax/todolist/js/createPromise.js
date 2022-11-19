export function createPromise(method, url, data = null) {
    const promise = new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest()

        xhr.open(method, url)
        xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
        xhr.send(data)

        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status < 400) {
                    const json = JSON.parse(this.responseText)
                    resolve(json)
                } else {
                    reject(Error('algo deu errado com conexao'))
                }
            }
        }
    })
    console.log(promise)
    return promise
}
