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

function getPlayerChoice(){
  let choice = prompt("Enter a choice: rock, paper, or scissors ").toLowerCase();
  if(choice === 'rock' || choice === 'paper' || choice === 'scissors'){
    return choice;
  } else{
    return getPlayerChoice();
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
  return (playerScore > computerScore) ? "Game over, You won!" : "Game over, You lost!";
}

function game(){
  let playerScore = 0;
  let computerScore = 0;

  while(playerScore < 5 && computerScore < 5){
    const playerSelection = getPlayerChoice();
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