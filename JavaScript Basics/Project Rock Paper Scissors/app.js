const rock = 'ROCK'
const paper = 'PAPER'
const scirrors = 'SCIRRORS'
let computerSelection = document.querySelector('.computerSelection')
let playerSelection = document.querySelector('.playerSelection')
let winner = document.querySelector('.winner')

function randomNumber(array){
    return Math.floor((Math.random() * array.length))
}

function computerPlay(){
    const options = [rock, paper, scirrors]
    return options[randomNumber(options)] 
}

function playRound(playerSelection, computerSelection) {
    //console.log('c ' + computerSelection)
    playerSelection = playerSelection.toUpperCase()
    //console.log('paper ' + playerSelection)
    if(playerSelection === paper && computerSelection === rock){
        return 'player win'
    } else if(playerSelection === rock && computerSelection === paper){
        return 'computer win'
    } else if(playerSelection === rock && computerSelection === scirrors){
        return 'player win'
    } else if(playerSelection === scirrors && computerSelection === rock){
        return 'computer win'
    } else if(playerSelection === scirrors && computerSelection === paper){
        return 'player win'
    } else if(playerSelection === paper && computerSelection === scirrors){
        return 'computer win'
    } else {
        return 'It\'s a tie'
    }
}
function onPlayerSelection(id) {
    playerSelection.textContent = id.toUpperCase()
    computerSelection.textContent = computerPlay();
    winner.textContent = playRound(playerSelection.textContent, computerSelection.textContent)
}