/* TODO: Add reset game functionality. */
const player = (name, sign) => {
  return {name, sign};
};

/* TODO: Add grid input to put mark (x or o). */
const displayController = (() => {
  const grid = document.querySelectorAll('.grid');
  const reset = document.querySelector('.reset');
  let sign = null;
  const resetGame = () => {
    let board = document.getElementById('grid');
    let fields = board.children;
    for (let i = 0; i < fields.length; i++) {
      let field = fields[i];
      field.textContent = '';
      field.disabled = false;
    }
  };

  const setSign = () => {
    if (sign === null) {
      sign = 'x';
    } else if (sign === 'o') {
      sign = 'x';
    } else {
      sign = 'o';
    }
    return sign;
  };
  const addSign = (e) => {
    console.log("pressed!");
    console.log(e.target.value);
    e.target.textContent = setSign();
    e.target.disabled = true;
  };

  reset.addEventListener('click', resetGame);
  grid.forEach(field => {
    field.addEventListener('click', addSign);
  });
  
  return {addSign, resetGame, setSign};
})();

// console.log(displayController.setSign());
const gameBoard = (() => {
  let gameBoard = [];
  gameBoard.length = 9;

  const player1 = player('red', 'x');
  const player2 = player('blue', 'o');
  
  return {gameBoard}
});