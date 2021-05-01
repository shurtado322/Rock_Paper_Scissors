const MAX = 3;      // Number of options for computer to randomize
let games = 0;      // games will keep track of the non tied games in each match  
let totGames = 0;   // totGames will keep track of the total games played in each match
let usrWin = 0;     // Store number of games won by user
let cpuWin = 0;     // Store number of games won by computer
let winner = "";    // Store the winner out of 5 games

// Randomization function that will return an integer between 0 and input number
function getRandInt(max) {
    return Math.floor(Math.random() * max);
}

function computerPlay () {
    // Generate a random choice for computer player to use
    cpuPick = getRandInt(MAX);
    // Assign cpu choice to a each value
    if (cpuPick == 0) {
        cpuPick = "rock";
    }
    else if (cpuPick == 1) {
        cpuPick = "paper";
    }
    else {
        cpuPick = "scissors";
    }
    return cpuPick;
}

function playRound(e) {
    //do {
        let usrChoice = e;    // Store user's selection to compare with computer selection
        let cpuChoice;        // Store computer's selection.

        // Get computer choice
        cpuChoice = computerPlay();
        
        // Display both choices to user
        console.log("\nYou chose: " + usrChoice.toUpperCase());
        console.log("\nComputer chose: " + cpuChoice.toUpperCase());

        

        const results = document.querySelector("#results");

        // Display user's current choice
        const currentUsr = document.createElement("div");
        currentUsr.classList.add("currentUsr");
        currentUsr.textContent = "You chose: " + usrChoice.toUpperCase();

        // Display computer's current choice
        const currentCpu = document.createElement("div");
        currentCpu.classList.add("currentCpu");
        currentCpu.textContent = "Computer chose: " + cpuChoice.toUpperCase();

        results.appendChild(currentUsr);
        results.appendChild(currentCpu);

        // Go through each possibility and find out who wins
        // If computer choice and user choice are the same, the game is a tie
        if (cpuChoice == usrChoice) {
            const tieResult = document.createElement("div");
            tieResult.classList.add("tieResult");
            tieResult.textContent = "Game " + Number(totGames + 1) + ": IT'S A TIE!!!";
            results.appendChild(tieResult);
            games--;
        }
        // List of cases in which computer would win
        else if ((cpuChoice == "scissors" && usrChoice == "paper") || 
                (cpuChoice == "paper" && usrChoice == "rock") || 
                (cpuChoice == "rock" && usrChoice == "scissors")) {
            const computerWin = document.createElement("div");
            computerWin.classList.add("computerWin");
            computerWin.textContent = "Game " + Number(totGames + 1) + ": COMPUTER WINS!!!";
            results.appendChild(computerWin);
            cpuWin++;       // Increment computer wins by one
        }
        // If computer does not win and game is not a tie, user wins
        else {
            const userWin = document.createElement("div");
            userWin.classList.add("userWin");
            userWin.textContent = "Game " + Number(totGames + 1) + ": YOU WIN!!!";
            results.appendChild(userWin);
            usrWin++;           // Increment user wins by one
        }
        games++;
        totGames++;

    //} 
    //while (games < 5 && usrWin < 3 && cpuWin < 3);
    }

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

