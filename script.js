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

const gameBoard = (() => {
  let gameBoard = [];
  gameBoard.length = 9;
  
  return {gameBoard}
})();


/* TODO: Add grid input to put mark (x or o). */
const displayController = (() => {
  const grid = document.querySelectorAll('.grid');
  const reset = document.querySelector('.reset');
  const board = gameBoard;
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
    let currField = e.target.value;
    board[currField] = playerSign;
    console.log(board);
    e.target.disabled = true;
    checkWinCondition();
    turn++;
  };

/* TODO: Debug checkWinCondition */
  const checkWinCondition = () => {
    if (checkRows() || checkColumns() || checkDiagonals()) {
      console.log("winner");
/*       disableGame(); */
    }
  }

  const checkRows = () => {
    if ((board[0] === board[1] && board[1] === board[2]) ||
        (board[3] === board[4] && board[4] === board[5]) ||
        (board[6] === board[7] && board[7] === board[8])) {
          return true;
    }
    return false;
  };

  const checkColumns = () => {
    if ((board[0] === board[3] && board[3] === board[6]) ||
        (board[1] === board[4] && board[4] === board[7]) ||
        (board[2] === board[5] && board[5] === board[8])) {
      return true;
    }
    return false;
  };

  const checkDiagonals = () => {
    if ((board[0] === board[4] && board[4] === board[8]) ||
        (board[6] === board[4] && board[4] === board[2])) {
      return true;
    }
    return false;
  };

/*   const disableGame = () => {
    let board = document.getElementById('grid');
    let fields = board.children;
    for (let i = 0; i < fields.length; i++) {
      let field = fields[i];
      field.disabled = true;
    }
  } */

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
  
  return {board, playGame, resetGame, player1, player2, turn};
})();

// console.log(displayController.setSign());
