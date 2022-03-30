(function () {
  const ghResource = "https://raw.githubusercontent.com/Utkarshverma7/dice-game/master/images/";

  function createRandom() {
    return Math.floor(Math.random() * 6) + 1;
  }

  function setDiceImage(diceElement, diceNumber = createRandom()) {
    let diceSrc = `${ghResource}dice${diceNumber}.png`;
    diceElement.setAttribute(`src`, diceSrc);
  }

  function checkWinner(firstDice, secondDice) {
    const winnerTitle = document.querySelector('h1');

    if (firstDice > secondDice)
      return winnerTitle.innerHTML = `Player 1 win!`;

    if (firstDice < secondDice)
      return winnerTitle.innerHTML = `Player 2 win!`;

    winnerTitle.innerHTML = `No Wins, Draw!`;
  }

  function createDice() {
    const diceImage_1 = document.querySelector("#dice-1");
    const diceImage_2 = document.querySelector('#dice-2');

    const diceNumber_1 = createRandom();
    const diceNumber_2 = createRandom();

    setDiceImage(diceImage_1, diceNumber_1);
    setDiceImage(diceImage_2, diceNumber_2);

    checkWinner(diceNumber_1, diceNumber_2);
  }

  createDice();
  window.onclick = () => createDice();
})();
