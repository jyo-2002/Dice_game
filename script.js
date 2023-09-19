const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const rollBtn = document.getElementById("rollBtn");
const result = document.getElementById("result");

const diceImages = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png"
];

rollBtn.addEventListener("click", () => {
  const diceValue1 = Math.floor(Math.random() * 6);
  const diceValue2 = Math.floor(Math.random() * 6);

  dice1.src = diceImages[diceValue1];
  dice2.src = diceImages[diceValue2];

  // Compare the dice values, not the dice elements
  if (diceValue1 > diceValue2) {
    result.textContent = "Player 1 wins!";
  } else if (diceValue2 > diceValue1) {
    result.textContent = "Player 2 wins!";
  } else {
    result.textContent = "It's a tie!";
  }
});