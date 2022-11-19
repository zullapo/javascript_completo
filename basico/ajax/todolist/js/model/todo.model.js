export class Todo {
    constructor(
        title,
        completed = false,
        createdAt = new Date(),
        updatedAt = new Date(),
        id = 0
    ) {
        this._title = title
        this._completed = completed
        this._createdAt = createdAt
        this._updatedAt = updatedAt
        this._id = id
    }

    set title(value) {
        this._title = value
    }

    get title() {
        return this._title
    }

    toggleCompleted() {
        this._completed = !completed
    }

    get completed() {
        return this._completed
    }

    get createdAt() {
        return this._createdAt
    }

    get updatedAt() {
        return this._updatedAt
    }

    get id() {
        return this._id
    }

    /*
    Como getters/setters não podem ter mesmo nome que as propriedades,
    então deve ser retornado um objeto com o nome dos getters e setters.
    */
    toDto() {
        return {
            title: this.title,
            completed: this.completed,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        }
    }
}
