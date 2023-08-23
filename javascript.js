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
    updateScore('tie', playerSelection, computerSelection);
  } else if(computerSelection == "rock" && playerSelection == "scissors"
         || computerSelection == "paper" && playerSelection == "rock" 
         || computerSelection == "scissors" && playerSelection == "paper"){
    updateScore('computer-win', playerSelection, computerSelection);
  } else{
    updateScore('player-win', playerSelection, computerSelection);
  }
}

function updateScore(outcome, playerSelection, computerSelection){
  const results = document.querySelector('#results');
  const playerScore = document.getElementById('player-score');
  let playerValue = Number(playerScore.textContent);
  const computerScore = document.getElementById('computer-score');
  let computerValue = Number(computerScore.textContent);

  if(outcome === 'computer-win'){
    computerValue++;
    if(computerValue === 5){
      getWinner(playerValue, computerValue);
    }
    computerScore.textContent = computerValue;
    results.textContent = `round lost! ${computerSelection} beats ${playerSelection}`;
  } 
  else if(outcome === 'player-win'){
    playerValue++;
    playerScore.textContent = playerValue;
    results.textContent = `round won! ${playerSelection} beats ${computerSelection}`;
    if(playerValue === 5){
      getWinner(playerValue, computerValue);
    }
  }
  else{
    results.textContent = `it was a tie!`;
  }
}

function getWinner(playerScore, computerScore){
  document.querySelectorAll('button').forEach((button) => button.removeEventListener('click', playRound));
  const results = document.querySelector('#final-results');
  results.textContent = (playerScore > computerScore) ? "Game over, You won!" : "Game over, You lost!";
}

document.querySelectorAll('button').forEach((button) => button.addEventListener('click', playRound));