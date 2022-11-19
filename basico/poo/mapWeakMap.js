// Objeto chave-valor porém, pode armazenar chaves de quaisquer tipos.

const map = new Map()

map.set(0, '1')
map.set(1, '2')
map.set(2, '3')

for (const key in map) {
    console.log(key)
}

const _privado = new WeakMap()

const MyClass = function MyClass() {
    _privado.set(this, {
        writable: true,
        value: 0
    })

    console.log(_privado.get(this))

}

// console.log(_privado)

MyClass()
