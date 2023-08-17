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

let r = 0;
let p = 0;
let s = 0;
for(let i = 0; i < 1000; i++){
  let answer = getComputerChoice();
  if(answer == "rock"){
    r++;
  } else if(answer == "paper"){
    p++;
  } else {
    s++;
  }
}
console.log("rock % : " + r/1000 + " paper % : " + p/1000 + "scissor % : " + s/1000);