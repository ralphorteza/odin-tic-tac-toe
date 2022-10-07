/* TODO: Add reset game functionality. */



const gameBoard = () => {
  let gameBoard = [];
  gameBoard.length = 9;

  return {gameBoard}
};


/* const Player = (sign) => {
}; */

const gameController = (() => {

})();


/* TODO: Add grid input to put mark (x or o). */
const displayController = (() => {
  const grid = document.querySelector('.grid');
  const field = grid.querySelector('.field');

  const addSign = () => {
    field.textContent = "hello";
  }
  field.addEventListener('click', addSign);
  return {addSign};
})();

/* function d () {
  const grid = document.querySelector('.grid');
  const field = document.querySelectorAll('.field');

  const addSign = () => {
    field.textContent = "hello";
  };

  field.addEventListener('click', addSign);

} */