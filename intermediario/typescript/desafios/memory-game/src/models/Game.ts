import Card from './Card'

class Game {
    private firstCard: HTMLDivElement | null = null
    private secondCard: HTMLDivElement | null = null

    constructor(private dom: HTMLDivElement, private cards: Card[]) { }

    addListeners() {
        Array.from(this.dom.querySelectorAll('[data-card]')).forEach((card, i) => {
            card.addEventListener('click', (e) => {
                const clickedCard = e.currentTarget as HTMLDivElement

                if (this.firstCard == clickedCard || this.secondCard == clickedCard || clickedCard.classList.contains('show')) {
                    return
                }
                
                if (!this.firstCard) {
                    clickedCard.classList.add('show')
                    this.firstCard = clickedCard
                } else if (!this.secondCard) {
                    clickedCard.classList.add('show')
                    this.secondCard = clickedCard
                    if (this.firstCard.getAttribute('data-card') === this.secondCard.getAttribute('data-card')) {
                        this.firstCard = null
                        this.secondCard = null
                    } else {
                        setTimeout(() => {
                            this.firstCard?.classList.remove('show')
                            this.secondCard?.classList.remove('show')
                            this.firstCard = null
                            this.secondCard = null
                        }, 2000)
                    }
                }
            })
        })
    }


    init() {
        this.dom.innerHTML = `${this.cards.map(card => (`
            <div class="card" data-card="${card.id}">
                <img src="img/${card.img}" class="card-front" alt="${card.description}"/>
                <img src="img/back.png" class="card-back" alt="Memory card" />
            </div>
        `)).join('')}`
        this.addListeners()
    }
}

export default Game