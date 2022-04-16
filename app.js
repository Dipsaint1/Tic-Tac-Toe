let nextTurn = true;
let turn = document.getElementById("turn");
let nextPlayer = "Player 1";

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

    
    // if(nextTurn){
    //   e.target.innerText = "x";
    //   nextPlayer = "Player 2";
    // }

    // else{e.target.innerText = "o";
    //   nextPlayer = "Player 1";
    // }
    TicTacToe.play(nextTurn, e);

    if(TicTacToe.checkXWin()){
      console.log("X Wins");
      // endGame();
    }

    else if(TicTacToe.checkOWin()){
      console.log("O Wins");
      // endGame();
    }
    else if(TicTacToe.isDraw()){
      // endGame();
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

  }

  static findIndex(e){

  }
  
}

new TicTacToe();

