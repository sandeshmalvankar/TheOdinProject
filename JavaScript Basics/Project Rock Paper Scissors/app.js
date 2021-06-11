const rock = 'ROCK'
const paper = 'PAPER'
const scirrors = 'SCIRRORS'

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

const playerSelection = computerPlay()
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));