class Produto {
    constructor(public nome: string, public preco: number, public descricao?: string) {}
}

class GenericList<T> {
    private list: T[] = []

    getItemAt(index: number): T | null {
        const length = this.list.length
        if (length === 0 || index > length || index < 0) {
            return null
        }
        return this.list[index]
    }

    removeItemAt(index: number): void {
        const item = this.getItemAt(index)
        if (item !== null) {
            this.list.splice(index, 1)
        }
    }

    addItem(...elements: T[]): void {
        this.list.push(...elements)
    }
}

const listaProdutos = new GenericList<Produto>()
listaProdutos.addItem(
    new Produto('almofada', 50),
    new Produto('kit panelas', 75),
    new Produto('kit teclado e mouse', 150)
)
console.log(listaProdutos)
console.log(listaProdutos.getItemAt(1))
listaProdutos.removeItemAt(1)
console.log(listaProdutos)
