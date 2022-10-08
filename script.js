/* TODO: Add reset game functionality. */



const gameBoard = () => {
  let gameBoard = [];
  gameBoard.length = 9;

  return {gameBoard}
};


/* const Player = (sign) => {
}; */

/* const gameController = (() => {
})(); */


/* TODO: Add grid input to put mark (x or o). */
const displayController = (() => {
  const grid = document.querySelectorAll('.grid');

  const addSign = (e) => {
    console.log("pressed!");
    console.log(e.target.value);
  }

  grid.forEach(field => {
    field.addEventListener('click', addSign);
  });
  
  return {addSign};
})();