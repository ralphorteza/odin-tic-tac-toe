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
  const resetBoard = () => {
    gameboard = [];
    gameboard.length = 9;
  }
  return {gameBoard, resetBoard}
})();


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
    turn++;
    checkWinCondition();
    console.log(`turn: ${turn}`)
    checkDraw();
  };

  const checkDraw = () => {
    if (turn == 9) {
      console.log("draw");
      resetGame();
    }
  }

  const checkWinCondition = () => {
    if (checkRows() || checkColumns() || checkDiagonals()) {
      console.log("winner");
      resetGame();
    } 
  }

  const checkRows = () => {
    for (let i = 0; i < 3; i++) {
      let row = [];
      for (let j = i * 3; j < i * 3 + 3; j++) {
        row.push(board[j]);
      }
      if (row.every(cell => cell == 'x' || row.every(cell => cell == 'o'))) {
        return true;
      }
    }
    return false;
  };

  const checkColumns = () => {
    for (let i = 0; i < 3; i++) {
      let col = [];
      for (let j = 0; j < 3; j++) {
        col.push(board[i + 3 * j]);
      }
      if (col.every(cell => cell == 'x' || col.every(cell => cell == 'o'))) {
        return true;
      }
    }
    return false;
  };

  const checkDiagonals = () => {
    let diagonal1 = [board[0], board[4], board[8]];
    let diagonal2 = [board[2], board[4], board[6]];

    if (diagonal1.every(cell => cell == 'x') || diagonal1.every(cell => cell == 'o')) {
      return true;
    } else if (diagonal2.every(cell => cell == 'x') || diagonal2.every(cell => cell == 'o')) {
      return true;
    } else {
      return false;
    }
  };

  const resetGame = () => {
    let cells = document.getElementById('grid');
    let fields = cells.children;
    for (let i = 0; i < fields.length; i++) {
      let field = fields[i]
      board[i] = null;
      field.textContent = '';
      field.disabled = false;
    }
    turn = 0;
  };
  reset.addEventListener('click', resetGame);
  grid.forEach(field => {
    field.addEventListener('click', playGame);
  });
  
  return {playGame};
})();

