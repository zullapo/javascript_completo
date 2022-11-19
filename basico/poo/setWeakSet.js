const arr = [5, 4, 5, 3, 1, 2]
const conjunto = new Set([...arr])

conjunto.add(2)
conjunto.add(1)
console.log(conjunto.size)

conjunto.delete(5)

for (const item of conjunto) {
    console.log(item)
}

console.log()

for (const key of conjunto.keys()) {
    console.log(key)
}

console.log()

for (const key of conjunto.values()) {
    console.log(key)
}

const obj1 = {'action': 'getItem()'}
const obj2 = {'action': 'setItem()'}
const obj3 = {'action': 'putItem()'}

const ws = new WeakSet()

ws.add(obj1)
ws.add(obj2)
ws.add(obj3)

console.log(ws.has(obj1))
