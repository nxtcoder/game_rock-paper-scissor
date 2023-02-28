
function getComputerChoice(){

    let randomNum = Math.floor(Math.random()*3)

    if(randomNum === 0){
        return "ROCK"
    }else if(randomNum === 1){
        return "PAPER"
    }else{
        return "SCISSOR"
    }
    
}

function playRound(player, computer){
    if (player === computer){
    return "Draw"
    }else if (player === "ROCK" && computer === "PAPER"){
    return ("Loose")
    }else if(player === "PAPER" && computer === "SCISSOR"){
    return ("Loose")
    }else if(player === "SCISSOR" && computer === "ROCK"){
    return ("Loose")
    }else {
    return "Win"
    }
}

function game(){
    let computerSelection = getComputerChoice();
    let playerInput = prompt("Your choice?").toUpperCase()
    console.log(playRound(playerInput, computerSelection))
    console.log("PLayer's Choice - " + playerInput)
    console.log("Computer's Choice - " + computerSelection)
}

function playMatch(){
    for(let i = 1; i <= 5; i++){
        game()
        console.log("Round - " + i )
        }
}

playMatch()
