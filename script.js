document.addEventListener('DOMContentLoaded', () => {

    // Define card options
    const cardArray = [
        { name: 'butterfly1', img: 'images/butterfly1.png'},
        { name: 'butterfly1', img: 'images/butterfly1.png'},
        // ... include all pairs of butterfly images
    ];

    // Create game board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            const getItRight = document.getElementByClass('game-board').appendChild(card);
        }
    }
     
    // Check for matches
    function checkForMatch() {
        // Logic to check for matches
    }

    // Flip the card
    function flipCard() {
        var cardId = this.getAttribute('data-id');
        this.setAttribute('src', cardArray[cardId].img);
        // Logic to add the card to an array of selected cards and check for a match
    }

    createBoard();
});



document.addEventListener("DOMContentLoaded", function() {
    const gameBoard = document.getElementById("game-board");
    const cardArray = [
        "🦋", "🦋", "🐛", "🐛", "🌸", "🌿"
    ];
    cardArray.sort(() => 0.5 - Math.random());

    cardArray.forEach(card => {
        const div = document.createElement("div");
        div.className = "card";
        div.textContent = card;
        div.addEventListener("click", () => flipCard(div));
        gameBoard.appendChild(div);
    });

    let firstCard = null;
    let secondCard = null;

    function flipCard(card) {
        if (card === firstCard) return;
        if (!firstCard) {
            firstCard = card;
            card.classList.add("flipped");
            return;
        }
        secondCard = card;
        card.classList.add("flipped");

        if (firstCard && secondCard) {
            if (firstCard.textContent === secondCard.textContent) {
                firstCard.classList.remove("flipped");
                secondCard.classList.remove("flipped");
                firstCard = null;
                secondCard = null;
            } else {
                setTimeout(() => {
                    firstCard.classList.remove("flipped");
                    secondCard.classList.remove("flipped");
                    firstCard = null;
                    secondCard = null;
                }, 1000);
            }
        }
    }
});

