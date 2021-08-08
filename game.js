const rockButton = document.querySelector('.btn-rock');
const paperButton = document.querySelector('.btn-paper');
const scissorsButton = document.querySelector('.btn-scissors');



rockButton.addEventListener('click', () => {
  const playerChoise = 'rock';
  console.log(playerChoise);
  console.log(computerPlayer());
})

paperButton.addEventListener('click', () => {
   const playerChoise = 'paper';
  console.log(playerChoise);
  console.log(computerPlayer());

 
})
scissorsButton.addEventListener('click', () => {
  const playerChoise = 'scissors';
  console.log(playerChoise);
  console.log(computerPlayer());

  
})


let playerScore = 0;
let computerScore = 0;

// Function that randomize computer RPC

function computerPlayer(){
    const randomPlay = (Math.floor(Math.random() * 3))
  
    if (randomPlay === 0){
    return 'rock';
  }
  else if (randomPlay === 1){
    return 'paper';
  }
  else if (randomPlay=== 2){
  return 'scissors';
  }
    }



/*
// For loop 5 times over the code. Probably refactor later. 

//for (let i = 0; i < 5; i++) {

//let playerChoise = prompt('--ROCK, PAPER, SCISSORS!-- \n\nYou are playing the computer in best of 5:\n\n Now choose your weapon (Rock, Paper or Scissors): ').toLowerCase();
const computerChoise = computerPlayer();
console.log(gameRound(playerChoise, computerChoise));
console.log(`Your Current Score: ${playerScore}`);
console.log(`Computer Score: ${computerScore}`);

  function gameRound(playerChoise, computerChoise) {
      
    
      if(playerChoise === computerChoise){
    return ("Draw!");
  } else if(playerChoise === "rock" && computerChoise === "paper"){
      computerScore++;
    return("Computer beats you!");
  } else if(playerChoise === "rock" && computerChoise === "scissors"){
      playerScore++;
    return("You win! Rock beats Scissors");
  } else if(playerChoise === "paper" && computerChoise === "scissors"){
      computerScore++;
    return("Computer beats you, Scissors beat Paper!")
  } else if (playerChoise === "paper" && computerChoise === "rock"){
      playerScore++;
    return("You win, Paper beats Rock!");
  } else if (playerChoise === "scissors" && computerChoise === "rock"){
      computerScore++;
    return("Computer wins, Rock beat Scissors");
  } else if (playerChoise === "rock" && computerChoise === "paper"){
      computerScore++;
    return("computer wins, Paper beats Rock!");
  } else if (playerChoise === "scissors" && computerChoise === "paper"){
      playerScore++;
    return("You win! Scissors beat paper!");
  } 
}

// Logging the winner with If statement after the above loop has run.

console.log(isWinner());

function isWinner() {
  if (playerScore === computerScore) {
    return 'THE FIVE GAMES ENDED IN A DRAW!';
  }

  else if (playerScore < computerScore) {
    return 'COMPUTER WINS THE 5!'
  }
  else {
    return 'CONGRATULATIONS YOU WON THE BEST OF 5!'
  }
  
} 
*/