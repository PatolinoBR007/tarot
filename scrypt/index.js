// Reference to the cards div
const cardsDiv = document.querySelector('#cards');



// Create 22 cards with background images from the "assets/cards" directory
for (let i = 0; i < 22; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.backgroundImage = `url(assets/cards/${i}.png)`;
    cardsDiv.appendChild(card);
}