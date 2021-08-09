const rockButton = document.querySelector('.btn-rock');
const paperButton = document.querySelector('.btn-paper');
const scissorsButton = document.querySelector('.btn-scissors');
const container = document.querySelector('.container');
const score = document.querySelector('.score');
const message = document.querySelector('.message');

let playerScore = 0;
let computerScore = 0;


function gameOver() {
  return playerScore === 5 || computerScore === 5;
}

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
  if (!gameOver()) {
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
  message.innerText =("Computer wins, Paper beats Rock!");
} else if (playerChoise === "scissors" && computerPlayer() === "paper"){
  playerScore++;
  message.innerText =("You win! Scissors beat paper!");
}
score.innerText = (`Your Current Score: ${playerScore} \n Computer Score: ${computerScore}`);
container.innerText = (`You picked ${playerChoise}...`);

} else {
    if (computerScore > playerScore){
      message.style.color = "red"
      message.innerText = ('Computer won, reload to play to 5 again!')
    } else { message.style.color = "gold"
      message.innerText = ('YOU WON! Reload to play to 5 again!')
}
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
  }
