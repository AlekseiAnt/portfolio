//Created on Feb 6, 2024 by Aleksei Antoniukov in Visual Studio Code on Macbook Pro 13" (2017)
//tested in Chrome and Safari

//create constants: the board element and the array of cells, to access them index-wise
const board = document.getElementById('gameboard');
let cells = board.getElementsByTagName('div');

//all 8 possible index combinations that lead to a win
const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

//function that saves the username in the 'username' variable
function savename() {
    username = document.getElementById("username").value;
}

/*function that starts the game. it hides the starterform 
and shows the board if the username is present in the field*/
function startgame() {
    if (username.length > 0) {
    document.getElementById('startform').style.display='none'; 
    document.getElementById('gameboard').style.display='grid';
    } else {
       pass;
    }
};

//function responsible for gameplay process, listens for clicks if the game has not ended yet
function playGame() {
    for (var i = 0; i<cells.length; i++){
        if(cells[i].className!="cell x" && cells[i].className!="cell o"){
            cells[i].addEventListener('click', handleClick, {once: true});
        }
    }

}

//function that is being called when the cell is clicked
function handleClick(event) {
    //this part is for placing an x mark whenever the user makes a move
    const clickedCell = event.target;
    if(clickedCell.className!="cell x" && clickedCell.className!="cell o"){
        clickedCell.classList.add('x');

        //here I check if the game has finished after the user's move, if not I let the computer move
        if (resultCheck() == false) {
            oMove();
            //after the computer's move check again if the game has to stop
            resultCheck();
        }
        
        
    }
    
}

//function responsible for a computer making a random move
function oMove() {
    let oTurn = true;
    while (oTurn == true){
        //generating a random number 0 to 8(indexes of the cells)
        /*then I go on and check if the randomly selected cell is still available,
        if not, I pick another one. I do that until I find the free spot to put O there*/
        randInd = Math.floor(Math.random() * 9);
        if (cells[randInd].className!="cell x" && cells[randInd].className!="cell o"){
            cells[randInd].classList.add('o')
            oTurn = false;
        }
    }
}

//function that checks if the game has to stop, and if yes, displays the message accordingly to the result
function resultCheck(){
    //firstly checking for winning and losing (if there are 3 X's or O's in a row)
    //iterating through the array of combinations and every combination there
    for (let x = 0; x < 8; x++){
        let checkerWin = 0;
        let checkerLoss = 0;
        
        for (let y = 0; y < 3; y++){
            currCell = wins[x][y]
            if (cells[currCell].classList.contains('x')){
                checkerWin++ ;
            }else if (cells[currCell].classList.contains('o')){
                checkerLoss++ ;
            }
        }
        //if the user wins or loses, I show the result message with a restart button
        //hover and event listener stop working for the rest of the cells as well
        if (checkerWin == 3) {

            document.getElementById("result_message").innerText = "Congratulation, " + username+"! You won!"
            document.getElementById("result_message").style.display='block';
            document.getElementById("endGame").style.display='block';
            //iterating through every cell to turn off click listener and hover effects when the game ends
            for (let j = 0; j < 9; j++){
                cells[j].removeEventListener('click', handleClick);
                cells[j].classList.add('gameEnded');
            }
            
            return true
        } else if (checkerLoss == 3) {

            document.getElementById("endGame").style.display='block';
            document.getElementById("result_message").style.display='block';
            document.getElementById("result_message").innerText = "Sorry, " + username + ". You lost..."
            for (let j = 0; j < 9; j++){
                cells[j].removeEventListener('click', handleClick);
                cells[j].classList.add('gameEnded')
            }
            return true
        }
    }
    //now I check if there is a draw
    //draw checker is running after the win/lose one because I can still win or lose by making the 9th move
    let checkerDraw = 0;
    for (let d = 0; d < 9; d++){
        if (cells[d].classList.contains('x') || cells[d].classList.contains('o')){
            checkerDraw ++;
        }
        if (checkerDraw == 9){
        
            document.getElementById("endGame").style.display='block';
            document.getElementById("result_message").style.display='block';
            document.getElementById("result_message").innerText = "Sorry, " + username + ". game ended game in a draw"
            for (let j = 0; j < 9; j++){
                cells[j].removeEventListener('click', handleClick);
                cells[j].classList.add('gameEnded')
            }
            return true
        }
    }
    return false;
}

//the function that is being called when the 'start the game' button is clicked, 
//it is just for calling other functions in a right order
function main() {
    savename();
    startgame();
    playGame();
}


