// Display title of game 
console.log("Welcome to ROCK, PAPER, SCISSORS!\n\n");

let usrChoice;          // Store user's selection to compare with computer selection
let cpuChoice;          // Store computer's selection.
let isValid = false;    // Input validation boolean for user choice
// Do while loop will persist until a valid choice is entered by the user
do {
    // Get user choice
    usrChoice = prompt("Please type in your choice (rock, paper, scissors (x to exit)): ");
    // Define valid input for input validation
    if (usrChoice.toLowerCase() == "rock" || usrChoice.toLowerCase() == "paper" 
        || usrChoice.toLowerCase() == "scissors") {
        isValid = true;
    }
    // Choice if user enters x to exit
    else if (usrChoice.toLowerCase() == "x") {
        isValid = true;
        console.log("/nExited Successfully. Thanks for Playing!!!/n");
    }
    // Choice if no valid inputs are entered the prompt persists
    else {
        isValid = false;
    }
}
while (isValid == false);

