export class Todo {
    constructor(
        { title, completed, createdAt, updatedAt, id, userId } = {
            title,
            completed: false,
            createdAt: new Date(),
            updatedAt: null,
            id: "",
            userId
        }
    ) {
        this._title = title
        this._completed = completed
        this._createdAt = createdAt
        this._updatedAt = updatedAt
        this._id = id
        this._userId = userId
    }

    set title(value) {
        this._title = value
    }

    get title() {
        return this._title
    }

    toggleCompleted() {
        this._completed = !this._completed
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

    get userId() {
        return this._userId
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
            updatedAt: this.updatedAt,
            userId: this.userId
        }
    }
}
