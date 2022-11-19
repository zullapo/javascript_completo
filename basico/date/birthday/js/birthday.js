function quantoFaltaPara(m, d) {
    const dataAniversario = new Date(
        new Date().getFullYear(),
        parseInt(m) - 1,
        parseInt(d)
    )
    return Math.floor((dataAniversario - new Date()) / (1000 * 60 * 60 * 24))
}
