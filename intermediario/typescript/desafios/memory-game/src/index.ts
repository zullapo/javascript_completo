import Card from './models/Card'
import Game from './models/Game'

const uniqueCards: Card[] = [
    { "img": "01.png", "description": "card 1", "id": "card1" },
    { "img": "02.png", "description": "card 2", "id": "card2" },
    { "img": "03.png", "description": "card 3", "id": "card3" },
    { "img": "04.png", "description": "card 4", "id": "card4" },
    { "img": "05.png", "description": "card 5", "id": "card5" },
    { "img": "06.png", "description": "card 6", "id": "card6" },
    { "img": "07.png", "description": "card 7", "id": "card7" },
    { "img": "08.png", "description": "card 8", "id": "card8" }
]

const duplicatedCards: Card[] = []

uniqueCards.forEach((card) => {
    duplicatedCards.push({ ...card })
    duplicatedCards.push({ ...card })
})

function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const len = duplicatedCards.length

const cards: Card[] = []

while (cards.length < len) {
    let shuffled = getRandomNumber(0, duplicatedCards.length - 1)
    const item = duplicatedCards.splice(shuffled, 1)
    cards.push(item[0])
}

const gameDiv = document.querySelector('[data-game]') as HTMLDivElement

const game = new Game(gameDiv, cards)
game.init()

console.log(cards)