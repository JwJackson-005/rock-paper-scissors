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

const rockButton = document.querySelector('#rockButton');
const paperButton = document.querySelector('#paperButton');
const scissorsButton = document.querySelector('#scissorsButton');
const resultText = document.querySelector('#result');
const winnerText = document.querySelector('#winner');

rockButton.addEventListener('click', buttonSelected);
paperButton.addEventListener('click', buttonSelected);
scissorsButton.addEventListener('click', buttonSelected);

let playerScore = 0;
let computerScore = 0;

setScore(playerScore,computerScore);

function buttonSelected(e) {
    let result = playRound(e.target.textContent, computerPlay());
    processResult(result);
    resultText.textContent = result;
    if (isWinner()) {
        cleanUp();
    }
}

function cleanUp() {
    playerScore === 5 ? winnerText.textContent = 'You won!!!' : winnerText.textContent = 'You lost!!!';
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.remove();
    })
}

function isWinner() {
    return (playerScore === 5 || computerScore === 5);
}

function setScore(player, computer) {
    const scores = document.querySelectorAll('div');
    scores[0].textContent = `Player Score: ${player}`;
    scores[1].textContent = `Computer Score: ${computer}`;
}

function processResult(resultString) {
    if (resultString.includes('win')) {
        playerScore++;
    }
    else if (resultString.includes('lose')) {
        computerScore++;
    }
    setScore(playerScore, computerScore);
}