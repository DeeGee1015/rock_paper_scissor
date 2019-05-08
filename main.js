let gameOver = false;
let computerChoices = ["rock", "paper", "scissors"];

function randomFrom(array) {
return array[(Math.floor(Math.random()*3))];
}


function checkInput(input, computerChoices) {
if (input === "quit") {
return true;
}

let computerChoice = randomFrom(computerChoices);
console.log("Computer's choice", computerChoice);
console.log("Player's choice", input);

if(computerChoice === "rock" && input === "scissors"){
alert("Computer wins!");
return false;
} else if (computerChoice === "scissors" && input === "paper"){
alert("Computer wins!");
return false;
} else if (computerChoice === "paper" && input === "rock"){
alert("Computer wins!");
return false;
} else if (computerChoice === input ){
alert("Draw")
return false;
}else if (!computerChoices.includes(input)){
alert("check your spelling")
return false;
}else{
//TODO REVISIT
alert("Player wins");``
return false;
}
}

function start(gameOver, computerChoices) {
while (!gameOver){
let playerInput = prompt("Hi! Enter rock/paper/scissors to play, or quit to stop playing.");
playerInput = playerInput.toLowerCase();
gameOver = checkInput(playerInput, computerChoices);
}
}


start(gameOver, computerChoices)
