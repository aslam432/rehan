const board = document.getElementById('chessboard');
let selectedSquare = null;

const initialBoard = [
  ['♜','♞','♝','♛','♚','♝','♞','♜'],
  ['♟','♟','♟','♟','♟','♟','♟','♟'],
  ['','','','','','','',''],
  ['','','','','','','',''],
  ['','','','','','','',''],
  ['','','','','','','',''],
  ['♙','♙','♙','♙','♙','♙','♙','♙'],
  ['♖','♘','♗','♕','♔','♗','♘','♖']
];

function renderBoard() {
  board.innerHTML = '';
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.classList.add((row + col) % 2 === 0 ? 'light' : 'dark');
      square.dataset.row = row;
      square.dataset.col = col;
      square.textContent = initialBoard[row][col];
      square.addEventListener('click', handleClick);
      board.appendChild(square);
    }
  }
}

function handleClick(e) {
  const row = parseInt(e.target.dataset.row);
  const col = parseInt(e.target.dataset.col);

  if (selectedSquare) {
    const fromRow = parseInt(selectedSquare.dataset.row);
    const fromCol = parseInt(selectedSquare.dataset.col);
    initialBoard[row][col] = initialBoard[fromRow][fromCol];
    initialBoard[fromRow][fromCol] = '';
    selectedSquare.classList.remove('selected');
    selectedSquare = null;
    renderBoard();
  } else {
    if (initialBoard[row][col] !== '') {
      selectedSquare = e.target;
      selectedSquare.classList.add('selected');
    }
  }
}

renderBoard();