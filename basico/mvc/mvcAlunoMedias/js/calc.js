class Calc {
    static sum() {
        return Array.from(arguments).reduce((ac, vlr) => ac + vlr)
    }

    static average() {
        return this.sum(...arguments) / arguments.length
    }
}
