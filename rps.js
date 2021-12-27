function computerPlay() {
    const play = Math.floor(Math.random() * 3);
    const outcomes = ["Rock", "Paper", "Scissors"];
    return outcomes[play];
}

function validInput(string) {
    return (string === "rock" || string === 'paper' || string === 'scissors');
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (!validInput(playerSelection)) {
        return "Invalid input!";
    }

    if (playerSelection === "rock") {
        if(computerSelection === "rock"){
            return "It's a draw! You both selected Rock!";
        }
        else if (computerSelection === "paper") {
            return "You lose! Paper beats Rock!";
        }
        else {
            return "You win! Rock beats Scissors!";
        }
    }
    else if (playerSelection === "paper") {
        if(computerSelection === "rock"){
            return "You win! Paper beats Rock!";
        }
        else if (computerSelection === "paper") {
            return "It's a draw! You both selected Paper!";
        }
        else {
            return "You lose! Scissors beats Paper!";
        }
    }
    else {
        if(computerSelection === "rock"){
            return "You lose! Rock beats Scissors!";
        }
        else if (computerSelection === "paper") {
            return "You win! Scissors beats Paper!";
        }
        else {
            return "It's a draw! You both selected Scissors!";
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(prompt("Choose Rock/Paper/Scissors"), computerPlay()));
    }
}

game();