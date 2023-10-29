const numberOfRounds = 5
function playRound(numberOfRounds) {
    for (let i = 1; i <= numberOfRounds; i++) {
       let computerChoice = chooseComputer();
        console.log("computers choice is ",computerChoice)
        let playerChoice = choosePlayer();
        console.log("players choice is ",playerChoice)
        let winner = determineWinner(computerChoice,playerChoice);
        console.log("Round ",i,"winner is ",winner)
    }
}
let OneGame = playRound(numberOfRounds)

function chooseComputer() {
    let randomChoose = Math.random()*3
    if (randomChoose < 1) {
        return "Rock"
    }
    else if (randomChoose <2) {
    return "Paper"
    }
    else { return "Scissors"}

}

function choosePlayer() {
    let playerPrompt = prompt("Choose Rock, Paper or Scissors")
    playerValid = validatePrompt(playerPrompt)
    if (playerValid === "rock"){return "Rock" }
    else if (playerValid === "paper") {return "Paper"}
    else if (playerValid === "scissors") {return "Scissors"}
    else {return "Invalid double check your work next time"}
}
function validatePrompt(playerPrompt) {
    return (playerPrompt.toLowerCase())
}

function determineWinner(computer,player) {
    if (player === "Rock") {
        if(computer === "Paper") {return "Computer!"}
        if(computer === "Scissors") {return "Player!"}
        if(computer === "Rock") {return "Tie!"}

    }
    if (player === "Paper") {
        if(computer === "Paper") {return "Tie!"}
        if(computer === "Scissors") {return "Computer!"}
        if(computer === "Rock") {return "Player"}
    } 
    if (player === "Scissors") {
        if(computer === "Paper") {return "Player!"}
        if(computer === "Scissors") {return "Tie!"}
        if(computer === "Rock") {return "Computer!"}
    }
    return "oops"

}