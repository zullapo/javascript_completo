function createXMLHttpRequest(method, url, cb, data = null) {
    const xhr = new XMLHttpRequest()

    xhr.open(method, url)
    xhr.send(data)

    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200 || this.status === 304) {
                const objJson = JSON.parse(this.responseText)

                if (typeof cb === 'function') {
                    cb(objJson)
                }
            }
        } else if (typeof cb === 'function') {
            cb({
                status: this.status,
                message: 'algo deu errado com a conexão',
                obj: this
            })
        }
    }
}
