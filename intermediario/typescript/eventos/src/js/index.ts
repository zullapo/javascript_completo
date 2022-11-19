const testEventBtn1 = document.querySelector('#testEvent') as HTMLButtonElement
const testEventBtn2 = document.querySelector('#testEvent2') as HTMLButtonElement
const testEventBtn3 = document.querySelector('#testEvent3') as HTMLButtonElement

type HandleEvent = (this: HTMLButtonElement, e: MouseEvent) => void

const handleEvent: HandleEvent = function (e) {
    const counterSpan = this.querySelector('span') as HTMLSpanElement
    const counter = parseInt(counterSpan.innerText || "0")
    counterSpan.textContent = `${counter + 1}`

    if (this !== testEventBtn2) {
        // Adiciona +1 ao contador do botão 2
        const event = new Event('customClick')
        testEventBtn2.dispatchEvent(event)

        // Customiza evento para mostrar o contador
        const customEvent = new CustomEvent("customEvent", { detail: counter + 1 })
        testEventBtn3.dispatchEvent(customEvent)
    }
}

testEventBtn1.addEventListener('click', handleEvent)
testEventBtn2.addEventListener('customClick', handleEvent as EventListener)
testEventBtn2.addEventListener('click', function (e) {
    console.log(e)
})
testEventBtn3.addEventListener('customEvent', function (e) {
    console.log(e)
})
