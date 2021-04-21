// Display title of game 
console.log("Welcome to ROCK, PAPER, SCISSORS!\n\n");

let usrChoice;          // Store user's selection to compare with computer selection
let cpuChoice;          // Store computer's selection.
let isValid = false;    // Input validation boolean for user choice
const MAX = 3;          // Number of options for computer to randomize

// Randomization function that will return an integer between 0 and input number
function getRandInt(max) {
    return Math.floor(Math.random() * max);
}

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

// Generate a random choice for computer player to use
cpuChoice = getRandInt(MAX);
// Assign cpu choice to a each value
if (cpuChoice == 0) {
    cpuChoice = "rock";
}
else if (cpuChoice == 1) {
    cpuChoice = "paper";
}
else {
    cpuChoice = "scissors";
}
// Display both choices to user
console.log("\nYou chose: " + usrChoice.toUpperCase());
setTimeout(() => {console.log("\nComputer chose: " + cpuChoice.toUpperCase());
// Go through each possibility and find out who wins
// If computer choice and user choice are the same, the game is a tie
if (cpuChoice == usrChoice.toLowerCase()) {
    console.log("\nIT's A TIE!!!\n");
}
// List of cases in which computer would win
else if ((cpuChoice == "scissors" && usrChoice.toLowerCase() == "paper") || 
         (cpuChoice == "paper" && usrChoice.toLowerCase() == "rock") || 
         (cpuChoice == "rock" && usrChoice.toLowerCase() == "scissors")) {
    console.log("\nComputer Wins!!!\n");
}
// If computer does not win and game is not a tie, user wins
else {
    console.log("\nYOU WIN!!!\n");
}
}, 1200);

