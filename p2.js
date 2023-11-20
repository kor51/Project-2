//Create <p> tags for wins, ties, and losses (use template since variable are involved, establish the variables before this)
let wins = 0;
let losses = 0;
let ties = 0;
let userChoice = "nothing"; //r,p,s
let computerChoice = "nothing";

//Generates a new computer choice
function generateComputerChoice () {
    computerChoice = Math.floor(Math.random()*3)

    //Convert cpu num to string
    if (computerChoice == 0) {
        computerChoice = "rock";
    }else if (computerChoice == 1) {
        computerChoice = "paper";
    }else if (computerChoice == 2) {
        computerChoice = "scissors";
    }
}

//Grab buttons for rock, paper, and scissors
const rButton = document.querySelector("#rock");
const pButton = document.querySelector("#paper");
const sButton = document.querySelector("#scissors");
const main = document.querySelector("main");

recordScore();

rButton.addEventListener('click', function() {
    const youPick = document.createElement('p');
    youPick.textContent = "You picked rock";
    userChoice = "rock";
    rps();
})

pButton.addEventListener('click', function() {
    const youPick = document.createElement('p');
    youPick.textContent = "You picked paper";
    userChoice = "paper";
    rps();
})

sButton.addEventListener('click', function() {
    const youPick = document.createElement('p');
    youPick.textContent = "You picked scissors";
    userChoice = "scissors";
    rps();
})

//Record and save wins, losses, and ties as variables via conditional statement
function recordScore() {
    const scoretally = `
    <p><b>Wins: </b> ${wins}</p>
    <p><b>Losses: </b>${losses}</p>
    <p><b>Ties: </b>${ties}</p>
    <p>You picked ${userChoice}. Computer picked ${computerChoice}.</p>
    `;

    main.innerHTML = scoretally;
}

//RPS Game Here: read user input, and randomly generate computer input
function rps () {

   generateComputerChoice();

    if (userChoice === "rock") {
        if (computerChoice === "scissors") {
            //r > s
            wins ++;
        }else if (computerChoice === "paper") {
            //p > r
            losses ++;
        }else if (computerChoice === "rock") {
            //r = r
            ties ++;
        };
    } if (userChoice === "scissors") {
        if (computerChoice === "scissors") {
            //s = s
            ties ++;
        }else if (computerChoice === "paper") {
            //s > p
            wins ++;
        }else if (computerChoice === "rock") {
            //r > s
            losses ++;
        };
    } if (userChoice === "paper") {
        if (computerChoice === "scissors") {
            //s > p
            losses ++;
        }else if (computerChoice === "paper") {
            //p = p
            ties ++;
        }else if (computerChoice === "rock") {
            //p > r
            wins ++;
        };
    };
    recordScore();

}
