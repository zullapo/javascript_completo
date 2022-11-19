export function createXMLHttpRequest(method, url, success, error, data = null) {
    const xhr = new XMLHttpRequest()

    xhr.open(method, url)
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
    xhr.send(data)

    xhr.onloadend = function () {
        const json = JSON.parse(this.responseText)
        if (typeof success === 'function') {
            success(json)
        }
    }

    xhr.onerror = function () {
        if (typeof error === 'function') {
            error({ status: this.status, statusText: this.statusText })
        }
    }
}
