let deckId
const cardsContainer = document.getElementById("cards")
const newDeckBtn = document.getElementById("new-deck")
const drawCardBtn = document.getElementById("draw-cards")
const headline = document.getElementById("headline")

function handleClick() {
    fetch("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
        .then(res => res.json())
        .then(data => {
            deckId = data.deck_id
        })
}

newDeckBtn.addEventListener("click", handleClick)

drawCardBtn.addEventListener("click", () => {
    fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            cardsContainer.children[0].innerHTML = `
                <img src=${data.cards[0].image} class="card" />
            `
            cardsContainer.children[1].innerHTML = `
                <img src=${data.cards[1].image} class="card" />
            `
            getWinner(data.cards[0].value, data.cards[1].value)
        })
})

function getWinner(card1, card2) {
    const cardArray = ["2", "3", "4", "5", "6", "7", "8", "9","10", "JACK", "QUEEN", "KING", "ACE"]
    const card1IndexValue = cardArray.indexOf(card1) 
    const card2IndexValue = cardArray.indexOf(card2)
    console.log*=(card1IndexValue, card2IndexValue)

    if (card1IndexValue > card2IndexValue) {
        headline.innerText = "card 1 wins!"
    } else if (card1IndexValue < card2IndexValue) {
        headline.innerText = "card 2 wins!"
    } else {
        headline.innerText = "WAR!" 
    }
}
    
