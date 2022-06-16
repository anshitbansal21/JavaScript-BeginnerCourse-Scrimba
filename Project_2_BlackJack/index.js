
let sum 
let hasBlackJack = false
let isAlive = true
let message = ""
let cards = []
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector(".sum-el")
let cardsEl = document.querySelector(".cards-el")


let player = {
    name : "Per",
    chips : 145
}

let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name +  ": $" + player.chips 

function getRandomCard(){
    let card = Math.floor(Math.random() * 13 ) + 1

    if(card === 1)
        return 11;
    else if( card > 10)
        return 10;

    return card;
}

function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum : " + sum
    let text = ""

    for(let count = 0 ; count < cards.length ; count+=1)
        text  += cards[count] + " | "

    cardsEl.textContent = text;
    console.log(message)
}

function newCard(){
    if(isAlive === true && hasBlackJack === false)
    {
        console.log("new card")
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
    else if(isAlive === false)
    {
        console.log("Game has ended for you")
    }
    
}