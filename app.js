let nextTurn = true;
let turn = document.getElementById("turn");
let nextPlayer = "Player X";
let winningMessageText = document.querySelector(".winning-message-text");
const winningMessage = document.querySelector(".winning-message");
const restartBtn = document.getElementById("restart-button");

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

    restartBtn.addEventListener("click", () => {
      winningMessage.classList.remove("show");

      const cells = document.querySelectorAll(".cell");

      [...cells].forEach(cell => {
        cell.innerText = "";
        cell.removeEventListener("click", this.handleClick);
        nextTurn = true; 
        nextPlayer = "Player 1";
        cell.addEventListener("click", this.handleClick, { once: true});
      });
    });
  }

  static cells(){
    return Array.from(document.querySelectorAll(".cell"));   // Change NodeList to Array
  }

  handleClick(e){

    TicTacToe.play(nextTurn, e);

    if(TicTacToe.checkXWin()){
      TicTacToe.endGame(false, "Player X");
    }

    else if(TicTacToe.checkOWin()){
      TicTacToe.endGame(false, "Player O");

    }
    else if(TicTacToe.isDraw()){
      TicTacToe.endGame();
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
      nextPlayer = "Player O";
    }
    else {e.target.innerText = "o";
      nextPlayer = "Player X";
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

  static endGame(draw = true, winner = "draw"){
    if(draw){
      winningMessageText.textContent = `Draw`;
    }
    else{
      winningMessageText.textContent = `${winner} Wins`;
    }

    nextPlayer = "Player X";
    winningMessage.classList.add("show");
  }

}

new TicTacToe();


