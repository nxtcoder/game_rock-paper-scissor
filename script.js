
function getComputerChoice(){

    let randomNum = Math.floor(Math.random()*3)

    if(randomNum === 0){
        return "ROCK"
    }else if(randomNum === 1){
        return "PAPER"
    }else{
        return "SCISSORS"
    }
    
}

function playRound(player, computer){
    if (player === computer){
    return "Draw"
    }else if (player === "ROCK" && computer === "PAPER"){
    return ("Loose")
    }else if(player === "PAPER" && computer === "SCISSORS"){
    return ("Loose")
    }else if(player === "SCISSORS" && computer === "ROCK"){
    return ("Loose")
    }else {
    return "Win"
    }
}

const rockBtn = document.querySelector('#rock')
const paperBtn = document.querySelector('#paper')
const scissorsBtn = document.querySelector('#scissors')

rockBtn.addEventListener('click', () => {
    pchoice(" ROCK")
    finalscore()
    result(playRound("ROCK", cchoice(getComputerChoice())))
})
paperBtn.addEventListener('click', () => {
    pchoice(" PAPER")
    finalscore()
    result(playRound("PAPER", cchoice(getComputerChoice())))
})
scissorsBtn.addEventListener('click', () => {
    pchoice(" SCISSORS")
    finalscore()
    result(playRound("SCISSORS", cchoice(getComputerChoice())))
})

function pchoice(pla){
    const playerchoice = document.querySelector('#p-choice')
    playerchoice.innerText = ""
    playerchoice.append(pla)
}

function result(final){
    const result = document.querySelector('#result')
    result.innerText = ""
    result.append(final)
    counter(final)
}

function cchoice(comp){
    const computerchoice = document.querySelector('#c-choice')
    computerchoice.innerText = ""
    computerchoice.append(comp)
    return comp
}

function score(scor){
    const score = document.querySelector('#score')
    score.innerText = ""
    score.append(scor)
}

function counter(result){
    if (result == "Win"){
        pcount()
    }else if(result == "Loose"){
      ccount()
}
}

function finalscore(){

const pscore = document.querySelector('#p-score')
player = pscore.innerText

const compscore = document.querySelector('#c-score')
computer = compscore.innerText

const endresult = document.querySelector('#end-result')

if (player == 5){
    endresult.innerText = "You Win!"
}else if (computer == 5){
    endresult.innerText = "Computer Wins!"
}
}

function pcount(){
    const pscore = document.querySelector('#p-score')
    pscore.innerText ++
}

function ccount(){
    const cscore = document.querySelector('#c-score')
    cscore.innerText ++
}
