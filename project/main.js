
let userChoice = prompt("Do you choose sang, kaghaz or qeychi?");
let computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "sang";
} else if(computerChoice <= 0.67) {
    computerChoice = "kaghaz";
} else {
    computerChoice = "qeychi";
}

function compare(choice1, choice2) {
    if(choice1 === choice2) {
    alert("The result is a tie!");
}
if(choice1 === "sang") 
    if(choice2 === "qeychi") {
        alert("sang wins");
    } 
if(choice1 === "kaghaz") 
    if(choice2 === "sang") {
        alert( "kaghaz wins");
    } 
if(choice1 === "qeychi") 
    if(choice2 === "sang") {
        alert( "sang wins");
    } 
if(choice1 === "kaghaz") 
  if(choice2 === "qeychi") {
      alert( "qeychi wins");
  } 

if(choice1 === "sang") 
  if(choice2 === "kaghaz") {
      alert( "kaghaz wins");
  } 

if(choice1 === "qeychi") 
  if(choice2 === "kaghaz") {
      alert( "qeychi wins");
  } 


};
console.log("User Choice: " + userChoice);
console.log("Computer Choice: " + computerChoice);

compare(userChoice, computerChoice);