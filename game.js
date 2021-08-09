const rockButton = document.querySelector('.btn-rock');
const paperButton = document.querySelector('.btn-paper');
const scissorsButton = document.querySelector('.btn-scissors');
const container = document.querySelector('.container');
const score = document.querySelector('.score');
const message = document.querySelector('.message');

let playerScore = 0;
let computerScore = 0;
let winScore = playerScore + computerScore;

game();
function game() {
  

rockButton.addEventListener('click', ()  => {
  const playerChoise = 'rock';
  gameRound(playerChoise);
})

paperButton.addEventListener('click', () => {
   const playerChoise = 'paper';
  gameRound(playerChoise);
  
})

scissorsButton.addEventListener('click', () => {
  const playerChoise = 'scissors';
  gameRound(playerChoise);
})
  
}
function gameRound(playerChoise) {
  
  
  if(playerChoise === computerPlayer()){

  message.innerText = ('Draw!');
} else if(playerChoise === "rock" && computerPlayer() === "paper"){
  computerScore++;
  message.innerText = ("Computer beats you! Scissors beats rock!");
} else if(playerChoise === "rock" && computerPlayer() === "scissors"){
  playerScore++;
  message.innerText = ("You win! Rock beats Scissors");
} else if(playerChoise === "paper" && computerPlayer() === "scissors"){
  computerScore++;
  message.innerText =("Computer beats you, Scissors beat Paper!")
} else if (playerChoise === "paper" && computerPlayer() === "rock"){
  playerScore++;
  message.innerText =("You win, Paper beats Rock!");
} else if (playerChoise === "scissors" && computerPlayer() === "rock"){
  computerScore++;
  message.innerText =("Computer wins, Rock beat Scissors");
} else if (playerChoise === "rock" && computerPlayer() === "paper"){
  computerScore++;
  message.innerText =("computer wins, Paper beats Rock!");
} else if (playerChoise === "scissors" && computerPlayer() === "paper"){
  playerScore++;
  message.innerText =("You win! Scissors beat paper!");
}
score.innerText = (`Your Current Score: ${playerScore} \n Computer Score: ${computerScore}`);
container.innerText = (`You picked ${playerChoise}`);

} 

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

// // For loop 5 times over the code. Probably refactor later. 

// //for (let i = 0; i < 5; i++) {

// //let playerChoise = prompt('--ROCK, PAPER, SCISSORS!-- \n\nYou are playing the computer in best of 5:\n\n Now choose your weapon (Rock, Paper or Scissors): ').toLowerCase();
// const computerChoise = computerPlayer();
// console.log(gameRound(playerChoise, computerChoise));
// console.log(`Your Current Score: ${playerScore}`);
// console.log(`Computer Score: ${computerScore}`);

//   function gameRound(playerChoise, computerChoise) {
      
    
//       if(playerChoise === computerChoise){
//     return ("Draw!");
//   } else if(playerChoise === "rock" && computerChoise === "paper"){
//       computerScore++;
//     return("Computer beats you!");
//   } else if(playerChoise === "rock" && computerChoise === "scissors"){
//       playerScore++;
//     return("You win! Rock beats Scissors");
//   } else if(playerChoise === "paper" && computerChoise === "scissors"){
//       computerScore++;
//     return("Computer beats you, Scissors beat Paper!")
//   } else if (playerChoise === "paper" && computerChoise === "rock"){
//       playerScore++;
//     return("You win, Paper beats Rock!");
//   } else if (playerChoise === "scissors" && computerChoise === "rock"){
//       computerScore++;
//     return("Computer wins, Rock beat Scissors");
//   } else if (playerChoise === "rock" && computerChoise === "paper"){
//       computerScore++;
//     return("computer wins, Paper beats Rock!");
//   } else if (playerChoise === "scissors" && computerChoise === "paper"){
//       playerScore++;
//     return("You win! Scissors beat paper!");
//   } 
// }

// // Logging the winner with If statement after the above loop has run.

// console.log(isWinner());

// function isWinner() {
//   if (playerScore === computerScore) {
//     return 'THE FIVE GAMES ENDED IN A DRAW!';
//   }

//   else if (playerScore < computerScore) {
//     return 'COMPUTER WINS THE 5!'
//   }
//   else {
//     return 'CONGRATULATIONS YOU WON THE BEST OF 5!'
//   }
        