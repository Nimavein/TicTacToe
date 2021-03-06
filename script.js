const allBoxes = (() => {
    this.box0 = document.getElementById('box0');
    this.box1 = document.getElementById('box1');
    this.box2 = document.getElementById('box2');
    this.box3 = document.getElementById('box3');
    this.box4 = document.getElementById('box4');
    this.box5 = document.getElementById('box5');
    this.box6 = document.getElementById('box6');
    this.box7 = document.getElementById('box7');
    this.box8 = document.getElementById('box8');
    this.allBoxesArray = [box0, box1, box2, box3, box4, box5, box6, box7, box8];
    return {allBoxesArray};
})();

const gameBoard = (() => {
    this.board = [{box0 : 1}];
    const showBoard = () => {
        return board;
    };
    return { showBoard };
})();


const playTheGame = (() => {
    this.whichPlayerTurn = document.getElementById('which-player-turn');
    this.turn = 0;
    console.log(turn);
    const getTurn = () => {
        return turn;
    };
    const getWhichPlayerHasTurn = () => {
        return whichPlayerTurn = document.getElementById('which-player-turn');
    }
    return { getTurn, getWhichPlayerHasTurn };
})();

const addSymbol = (box) => {
    playTheGame.getTurn();
    let gameEnded = false;
    if (turn % 2 == 0 && box.innerText !== "X" && box.innerText !== "O") {
        box.innerText = "X";
        if ((box0.innerText === "X" && box1.innerText === "X" && box2.innerText === "X") || (box0.innerText === "X" && box3.innerText === "X" && box6.innerText === "X") || (box3.innerText === "X" && box4.innerText === "X" && box5.innerText === "X") || (box6.innerText === "X" && box7.innerText === "X" && box8.innerText === "X") || (box1.innerText === "X" && box4.innerText === "X" && box7.innerText === "X") || (box2.innerText === "X" && box5.innerText === "X" && box8.innerText === "X") || (box0.innerText === "X" && box4.innerText === "X" && box8.innerText === "X") || (box2.innerText === "X" && box4.innerText === "X" && box6.innerText === "X")) {
            whichPlayerTurn.innerText = 'Player "X" Won!'
            gameEnded = true;
            for (let i = 0; i < allBoxes.allBoxesArray.length; i ++){
                allBoxes.allBoxesArray[i].style.pointerEvents = 'none';
            }
        }
        turn ++;
        if (gameEnded == false) {
            whichPlayerTurn.innerText = 'Player "O" turn!'
        }
    }
    else if ((turn % 2 == 1 && box.innerText !== "X" && box.innerText !== "O")){
        box.innerText = "O";
        if ((box0.innerText === "O" && box1.innerText === "O" && box2.innerText === "O") || (box0.innerText === "O" && box3.innerText === "O" && box6.innerText === "O") || (box3.innerText === "O" && box4.innerText === "O" && box5.innerText === "O") || (box6.innerText === "O" && box7.innerText === "O" && box8.innerText === "O") || (box1.innerText === "O" && box4.innerText === "O" && box7.innerText === "O") || (box2.innerText === "O" && box5.innerText === "O" && box8.innerText === "O") || (box0.innerText === "O" && box4.innerText === "O" && box8.innerText === "O") || (box2.innerText === "O" && box4.innerText ==="O" && box6.innerText === "O")) {
            whichPlayerTurn.innerText = 'Player "O" Won!'
            gameEnded = true;
            for (let i = 0; i < allBoxes.allBoxesArray.length; i ++){
                allBoxes.allBoxesArray[i].style.pointerEvents = 'none';
            }
        }
        turn ++;
        if (gameEnded == false) {
            whichPlayerTurn.innerText = 'Player "X" turn!'
        }
    }
    else {
        whichPlayerTurn.innerText = "You can not steal someone's position!"
    }
    if (turn == 9 && gameEnded == false) {
        whichPlayerTurn.innerText = 'Draw!'
    }
    return {whichPlayerTurn};
}

//const checkIfGameEnded = () => {
//    let winArrays = 
//}

const Player = (symbol) => {
    let playerChoices = [];

};

const restartGame = () => {
    for (let i = 0; i < allBoxes.allBoxesArray.length; i ++){
        allBoxes.allBoxesArray[i].innerText = "";
    }
    console.log(allBoxesArray)
    for (let i = 0; i < allBoxes.allBoxesArray.length; i ++){
        allBoxes.allBoxesArray[i].style.pointerEvents = "auto";
    }
    turn = 0;
    whichPlayerTurn.innerText = 'New Game. Player "X" turn!'

};


