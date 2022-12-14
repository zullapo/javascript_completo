export function createFetch(method, url, body = null) {
    function errorHandler(response) {
        if (!response.ok) {
            throw Error(`${response.status}: ${response.statusText}`)
        }
        return response
    }

    return fetch(url, {
        method,
        body,
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        }
    })
        .then((response) => errorHandler(response))
        .then((response) => response.json())
}
