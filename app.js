let nextTurn = true;
let turn = document.getElementById("turn");
let nextPlayer = "Player 1";
let winningMessageText = document.querySelector(".winning-message-text");
const winningMessage = document.querySelector(".winning-message");

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

class TicTacToe{
  constructor(){
    this.game(TicTacToe.cells());
  }

  static cells(){
    return Array.from(document.querySelectorAll(".cell"));   // Change NodeList to Array
  }

  handleClick(e){

    TicTacToe.play(nextTurn, e);

    if(TicTacToe.checkXWin()){
      TicTacToe.endGame("Player X");
    }

    else if(TicTacToe.checkOWin()){
      TicTacToe.endGame("Player O");
    }
    else if(TicTacToe.isDraw()){
      TicTacToe.endGame(true);
    }
    
    turn.innerText = `${nextPlayer}'s Turn`;
    TicTacToe.swapTurns();
  }

  game(cells){
    cells.forEach(cell => {
      turn.innerText = `${nextPlayer}'s Turn`;
      cell.addEventListener("click", this.handleClick, {once: true});
    });
  }

  static play(nextTurn, e){
    if (nextTurn){
      e.target.innerText = "x";
      nextPlayer = "Player 2";
    }
    else {e.target.innerText = "o";
      nextPlayer = "Player 1";
    }
  }

  static swapTurns(){
    nextTurn = !nextTurn;
    return nextTurn;
  }

  static checkXWin(){
    const cells = TicTacToe.cells();
    return winningCombinations.some(combination => {
      return combination.every(index => {
        return cells[index].innerText === "X";
      });
    });
  }

  static checkOWin(){
    const cells = TicTacToe.cells();
    return winningCombinations.some(combination => {
      return combination.every(index => {
        return cells[index].innerText === "O";
      });
    });
  }

  static isDraw(){
    // Check if all the cells are filled up
    const cells = TicTacToe.cells();
    return cells.every(cell => {
      return cell.innerText === "X" || cell.innerText === "O";
    });
  }

  static endGame(draw, winner = "draw"){
    if(draw){
      winningMessageText.textContent = `Draw`;
    }
    else{
      winningMessageText.textContent = `${winner} Wins`;
    }
    winningMessage.classList.add("show");
  }
  
}

new TicTacToe();

