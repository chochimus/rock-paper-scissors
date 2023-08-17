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
    console.log("Tie!");
  } else if(computerSelection == "rock" && playerSelection == "scissors"
  || computerSelection == "paper" && playerSelection == "rock" 
  || computerSelection == "scissors" && playerSelection == "paper"){
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
  } else{
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
  }
}

const playerSelection = "rock".toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
