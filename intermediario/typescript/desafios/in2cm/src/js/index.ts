const inchesInput = document.getElementById('inches') as HTMLInputElement
const centimetersInput = document.getElementById('centimeter') as HTMLInputElement

type FunctionListener = (this: HTMLInputElement, e: Event) => void

const convertToCm: FunctionListener = function () {
    const inches = parseFloat(this.value)
    centimetersInput.value = `${calculateCm(inches)}`
}

const convertToIn: FunctionListener = function () {
    const centimeters = parseFloat(this.value)
    inchesInput.value = `${calculateIn(centimeters)}`
}

function calculateCm(inches: number): number {
    return inches * 2.54
}

function calculateIn(centimeters: number): number {
    return centimeters / 2.54
}

inchesInput?.addEventListener('input', convertToCm)
centimetersInput?.addEventListener('input', convertToIn)
