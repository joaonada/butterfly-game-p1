const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let matchedPairs = 0;


function flipCard() {
  console.log(this);
  if (lockBoard)
    return;

  if (this === firstCard)
    return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
      return;
    }
        secondCard = this;

        checkForMatch();
  }

  function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  isMatch ? disableCards() : unflipCards();
  }

  function disableCards() {
     firstCard.removeEventListener('click', flipCard);
     secondCard.removeEventListener('click', flipCard);
     
     matchedPairs++;
    resetBoard();
    checkForWin();
  }
  
    function unflipCards() {

      setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
      
        resetBoard();

      }, 1500);
    }
      
function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}  
const totalPairs = 4;
function checkForWin() {
    if (matchedPairs === totalPairs) {
        displayWinMessage();
    }
}
function displayWinMessage() {
    const messageElement = document.createElement('div');
    messageElement.textContent = 'You win, Congrat!';
    messageElement.style.cssText = 'font-size: 64px; color: blue; text-align: flex-start;';
    document.body.appendChild(messageElement);
}  
 
(function shuffle() {
  cards.forEach(card => {
    let ramdomPos = Math.floor(Math.random() * 8);
    card.style.order = ramdomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard)
)