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

function playRound(playerSelection, computerSelection){
  if(computerSelection == playerSelection
  || computerSelection == playerSelection
  || computerSelection == playerSelection ){
    return 1;
  } else if(computerSelection == "rock" && playerSelection == "scissors"
         || computerSelection == "paper" && playerSelection == "rock" 
         || computerSelection == "scissors" && playerSelection == "paper"){
    return 2;
  } else{
    return 3;
  }
}

function getWinner(playerScore, computerScore){
  if(playerScore > computerScore){
    return "You won!";
  } else if( computerScore > playerScore){
    return "You lost!";
  } else {
    return "Tie";
  }
}

function game(){
  let playerScore = 0;
  let computerScore = 0;

  for(let i = 0; i < 5; i++){
    const playerSelection = prompt("Enter a choice: rock, paper, or scissors ").toLowerCase();
    const computerSelection = getComputerChoice();
    const results = playRound(playerSelection, computerSelection);
    if(results == 1){
      console.log(`Tie`);
      console.log(`Player: ${playerScore} Computer: ${computerScore}`);
    } else if( results == 2){
      console.log(`Round lost! ${computerSelection} beats ${playerSelection}`);
      computerScore++;
      console.log(`Player: ${playerScore} Computer: ${computerScore}`);
    } else{
      console.log(`Round won! ${playerSelection} beats ${computerSelection}`);
      playerScore++;
      console.log(`Player: ${playerScore} Computer: ${computerScore}`);
    }
  }
  return getWinner(playerScore, computerScore);
}

console.log(game());