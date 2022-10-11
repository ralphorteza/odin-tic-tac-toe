/* TODO: Add reset game functionality. */
const player = (name, sign) => {  
  let playerName = name;
  let playerSign = sign;

  return {
    get name() { return playerName; },
    get sign() { return playerSign; },
    set name(newName) { playerName = newName; },
    set sign(newSign) { playerSign = newSign; } 
  };
};

/* TODO: Add grid input to put mark (x or o). */
const displayController = (() => {
  const grid = document.querySelectorAll('.grid');
  const reset = document.querySelector('.reset');
  const player1 = player('red', 'x');
  const player2 = player('blue', 'o');
  let turn = 0;

  const playGame = (e) => {
    let playerSign;
    if (turn % 2 === 0) {
      playerSign = player1.sign;
      console.log(`${player1.name} placed ${player1.sign}`);
    } else {
      playerSign = player2.sign;
      console.log(`${player2.name} placed ${player2.sign}`);
    }

    e.target.textContent = playerSign;
    e.target.disabled = true;
    turn++;
  };

  const resetGame = () => {
    let board = document.getElementById('grid');
    let fields = board.children;
    for (let i = 0; i < fields.length; i++) {
      let field = fields[i];
      field.textContent = '';
      field.disabled = false;
    }
    turn = 0;
  };
  reset.addEventListener('click', resetGame);
  grid.forEach(field => {
    field.addEventListener('click', playGame);
  });
  
  return {playGame, resetGame, player1, player2, turn};
})();

// console.log(displayController.setSign());
const gameBoard = (() => {
  let gameBoard = [];
  gameBoard.length = 9;
  
  return {gameBoard}
})();
