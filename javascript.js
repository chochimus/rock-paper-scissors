function getComputerChoice(){
  let randomNum = Math.floor(Math.random() * 3) + 1;
  switch(randomNum){
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

function playRound(event){
  const playerSelection = event.target.id;
  const computerSelection = getComputerChoice();
  if(computerSelection == playerSelection
  || computerSelection == playerSelection
  || computerSelection == playerSelection ){
    updateScore('tie');
  } else if(computerSelection == "rock" && playerSelection == "scissors"
         || computerSelection == "paper" && playerSelection == "rock" 
         || computerSelection == "scissors" && playerSelection == "paper"){
    updateScore('computer-win');
  } else{
    updateScore('player-win');
  }
}

function updateScore(result){
  const playerScore = document.getElementById('player-score');
  let playerValue = Number(playerScore.textContent);
  const computerScore = document.getElementById('computer-score');
  let computerValue = Number(computerScore.textContent);

  if(result === 'computer-win'){
    computerValue++;
    if(computerValue === 5){
      getWinner(playerValue, computerValue);
    }
    computerScore.textContent = computerValue;
  } else if(result === 'player-win'){
    playerValue++;
    if(playerValue === 5){
      getWinner(playerValue, computerValue);
    }
    playerScore.textContent = playerValue;
  }
}

function getWinner(playerScore, computerScore){
  document.querySelectorAll('button').forEach((button) => button.removeEventListener('click', playRound));
  console.log((playerScore > computerScore) ? "Game over, You won!" : "Game over, You lost!");
}

document.querySelectorAll('button').forEach((button) => button.addEventListener('click', playRound));