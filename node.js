function getComputerChoice(){
 const Choices = ["rock","paper","scissors"];
 let randIndex = Math.floor(Math.random()*3);
 C_Choice = Choices[randIndex];
 return C_Choice;
}

function playRound(playerSelection,computerSelection){
 let displayMessage;
 let MasterList = [["paperrock","scissorspaper","rockscissors"],
              ["rockrock","scissorsscissors","paperpaper"],
              ["rockpaper","paperscissors","scissorsrock"]];
 let roundList = [playerSelection,computerSelection];
 let tempR = playerSelection.concat(computerSelection);
 
 if (MasterList[0].some(arr => arr === tempR)){
  displayMessage = "You Win!, "+roundList[0]+" beats "+roundList[1];
 }
 else if (MasterList[2].some(arr => arr === tempR)){
  displayMessage = "You Lose!, "+roundList[0]+" beats "+roundList[1];
 }
 else if (MasterList[1].some(arr => arr === tempR)){
  displayMessage = "JINX!!!, Play Again!!";
 }
 else {
  displayMessage = "What the fuck is that?!"
 
 }
 return displayMessage;
}
function game(){
 for (i = 1; i <= 5; i++){
  let a = prompt("Enter your choice: 1.Rock, 2.Paper, 3. Scissors");
  let playerSelection = a.toLowerCase();
  const computerSelection = getComputerChoice();
  final = playRound(playerSelection,computerSelection);
  console.log("Round "+i+" Result:")
  console.log(final);
  }
}
console.log(game())

 
 
