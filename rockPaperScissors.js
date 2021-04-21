// Display title of game 
console.log("Welcome to ROCK, PAPER, SCISSORS!\n\n");

let games = 0;      // games will keep track of the non tied games in each match  
let totGames = 0;   // totGames will keep track of the total games played in each match
let usrWin = 0;     // Store number of games won by user
let cpuWin = 0;     // Store number of games won by computer
let winner = "";    // Store the winner out of 5 games

do{
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
        usrChoice = prompt("\nPlease type in your choice (rock, paper, scissors): ");
        // Define valid input for input validation
        if (usrChoice.toLowerCase() == "rock" || usrChoice.toLowerCase() == "paper" 
            || usrChoice.toLowerCase() == "scissors") {
            isValid = true;
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
    console.log("\nComputer chose: " + cpuChoice.toUpperCase());
    // Go through each possibility and find out who wins
    // If computer choice and user choice are the same, the game is a tie
    if (cpuChoice == usrChoice.toLowerCase()) {
        console.log("\nGame " + Number(totGames + 1) + ": IT's A TIE!!!\n\n");
        games--;
    }
    // List of cases in which computer would win
    else if ((cpuChoice == "scissors" && usrChoice.toLowerCase() == "paper") || 
            (cpuChoice == "paper" && usrChoice.toLowerCase() == "rock") || 
            (cpuChoice == "rock" && usrChoice.toLowerCase() == "scissors")) {
        console.log("\nGame " + Number(totGames + 1) + ": Computer Wins!!!\n\n");
        cpuWin++;       // Increment computer wins by one
    }
    // If computer does not win and game is not a tie, user wins
    else {
        console.log("\nGame " + Number(totGames + 1) + ": YOU WIN!!!\n\n");
        usrWin++;       // Increment user wins by one
    }
    games++;
    totGames++;
} 
while (games < 5 && usrWin < 3 && cpuWin < 3);

// Figure out who the final winner is and display to user
if (usrWin > cpuWin) {
    console.log("\nUser wins: " + usrWin);
    console.log("\nComputer wins: " + cpuWin);
    console.log("\n\nYOU ARE THE CHAMPION!!!\n");
}
else if (usrWin < cpuWin) {
    console.log("\nUser wins: " + usrWin);
    console.log("\nComputer wins: " + cpuWin);
    console.log("\n\nBETTER LUCK NEXT TIME!")
}
else {
    console.log("\nThanks For Playing!")
}

