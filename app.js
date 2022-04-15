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
    this.game(this.cells());
  }

  cells(){
    return Array.from(document.querySelectorAll(".cell"));   // Change NodeList to Array
  }

  handleClick(e){
    
    if(nextTurn){
      e.target.innerText = "x";
      nextPlayer = "Player 2";
    }

    else{e.target.innerText = "o";
      nextPlayer = "Player 1";
    }

    if(checkWin){
      endGame();
    }

    else if(isDraw()){
      endGame();
    }

    else{
      turn.innerText = `${nextPlayer}'s Turn`;
      TicTacToe.swapTurns();
    }

    
  }

  game(cells){
    cells.forEach(cell => {
      turn.innerText = `${nextPlayer}'s Turn`;
      cell.addEventListener("click", this.handleClick, {once: true});
    });
  }

  static swapTurns(){
    nextTurn = !nextTurn;
    return nextTurn;
  }

  checkWin(){
    const cells = this.cells();
    return winningCombinations.some(combination => {
      return combination.every(index, () => {
        return cells[index].innerText === "x";
      });
    });
  }

  isDraw(){

  }
  
}

new TicTacToe();

