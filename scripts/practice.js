var userInput = 0;

document.getElementById('rockButton').addEventListener("click", throwRock)
document.getElementById('scissorsButton').addEventListener("click", throwScissors)
document.getElementById('paperButton').addEventListener("click", throwPaper)
    
function throwRock(){
    reset();
    userInput = 1;
    userButton(userInput);
    var computerInput = computerPlay();
    computerButton(computerInput);
    var result = play(userInput, computerInput);

    var ta = document.getElementById("ta");
    ta.textContent = "You have chosen to throw ROCK!\n\n" + result + "\n\nThe Computer has chosen to throw " + computerSelection(computerInput);;
}
function throwScissors(){
    reset();
    userInput = 2;
    userButton(userInput);
    var computerInput = computerPlay();
    computerButton(computerInput);
    var result = play(userInput, computerInput);

    var ta = document.getElementById("ta");
    ta.textContent = "You have chosen to throw SCISSORS!\n\n" + result + "\n\nThe Computer has chosen to throw " + computerSelection(computerInput);;
}
function throwPaper(){
    reset();
    userInput = 3;
    userButton(userInput);
    var computerInput = computerPlay();
    computerButton(computerInput);
    var result = play(userInput, computerInput);

    var ta = document.getElementById("ta");
    ta.textContent = "You have chosen to throw PAPER!\n\n" + result + "\n\nThe Computer has chosen to throw " + computerSelection(computerInput);
}
function computerPlay(){
   var result = Math.floor((Math.random() * 3) + 1);
   switch(result){
        case 1:
            return "1";
           break;
        case 2:
            return "2";
            break;
        case 3:
            return "3";
            break;
   }
}
function computerSelection(num){
    if (num==1){
        return 'ROCK!';
    }
    if (num==2){
        return 'SCISSORS!';
    }
    if (num==3){
        return 'PAPER!';
    }
}
function play(input, computer){
    var gameResult = "";
    if (input == computer){
        gameResult = "It's a tie!";
    }
    if (input == 1 && computer == 2){
        gameResult = "You win!";
    }
    if (input == 1 && computer == 3){
        gameResult = "You lose!";
    }
    if (input == 2 && computer == 3){
        gameResult = "You win!";
    }
    if (input == 2 && computer == 1){
        gameResult = "You lose!";
    }
    if (input == 3 && computer == 1){
        gameResult = "You win!";
    }
    if (input == 3 && computer == 2){
        gameResult = "You lose!";
    }
    return gameResult;
}

function computerButton(num){
    if (num==1){
        var button = document.getElementById("crock");
        button.style.backgroundColor = "red";
    }
    if (num==2){
        var button = document.getElementById("cscissors");
        button.style.backgroundColor = "red";
    }
    if (num==3){
        var button = document.getElementById("cpaper");
        button.style.backgroundColor = "red";
    }
}
function userButton(num){
    if (num==1){
        var button = document.getElementById("rockButton");
        button.style.backgroundColor = "gold";
    }
    if (num==2){
        var button = document.getElementById("scissorsButton");
        button.style.backgroundColor = "gold";
    }
    if (num==3){
        var button = document.getElementById("paperButton");
        button.style.backgroundColor = "gold";
    }
}
function reset(){
    var button = document.getElementById("crock");
    var button1 = document.getElementById("cscissors");
    var button2 = document.getElementById("cpaper");
    var button3 = document.getElementById("rockButton");
    var button4 = document.getElementById("scissorsButton");
    var button5 = document.getElementById("paperButton");
    button.style.backgroundColor = "olive";
    button1.style.backgroundColor = "olive";
    button2.style.backgroundColor = "olive";
    button3.style.backgroundColor = "coral";
    button4.style.backgroundColor = "coral";
    button5.style.backgroundColor = "coral";
}