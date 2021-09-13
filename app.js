const Display = document.querySelector('.gamestatus');

let Activegame = true;

let currentPlayer= '👿';


let gamebegin = ["" , "" , "" , "" , "" , "" , "" , "" , ""];

const Win = () => 'Player ${currentPlayer} has won!';
const Draw = () => 'Game has ended in a draw!';
const currentPlayerTurn = () => '${currentPlayer} turn';

Display.innerHTML = currentPlayerTurn();
function cellPlayed(){

}

function PlayerChange(){
    
}
function ResultsVal(){
    
}
function CellClick(){
    
}
function GameRestart(){
    
}
document.querySelectorAll('.row > div').forEach(cell => cell.addEventListener('click', CellClick));
document.querySelector('.gamerestart').addEventListener('click', GameRestart);

function CellClick(clickCellevent){
    const clickedCell = clickCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('datacellindex'));

    if (gamebegin[clickedCellIndex] !== "" || !Activegame){
        return;
    }
    cellPlayed(clickedCell, clickedCellIndex);
    ResultsVal();
}

function cellPlayed(clickedCell, clickedCellIndex){
    gamebegin[clickedCellIndex]=currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

const winning = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
function ResultsVal(){
    let won = false;
    for (let i = 0; i <=7; i++) {
        const winning = winnings[i];
        let a = gamebegin[winning[0]];
        let b = gamebegin[winning[1]];
        let c = gamebegin[winning[2]];
        if (a === '' || b === '' || c === ''){
            continue;
        }
        if (a === b && b === c) {
            won = true;
            break
         }
        
    }
if (won) {
    stausDisplay.innerHTML = winning();
    Activegame = false;
    return;
    }

    let roundDraw = !gamebegin.includes("");
    if (roundDraw) {
     stausDisplay.innerHTML = Draw();
     gamebegin = false;
     return;

    }
    PlayerChange();
}
function PlayerChange() {
    currentPlayer = currentPlayer === "👿" ? "😇" : "👿";
    lay.innerHTML = currentPlayerTurn();
}

function GameRestart () {
    Activegame = true;
    currentPlayer = "👿";
    gamebegin = ["" , "" , "" , "" , "" , "" , "" , "" , ""];
    stausDisplay.innerHTML = currentPlayerTurn ();
    document.querySelectorAll('.row > div')
    .forEach(cell => cell.innerHTML = "");
}