function getComputerChoice(){
    let showedHand;
    const randomSelector = Math.floor(Math.random() * (3));

    if(randomSelector == 0){
        showedHand = "rock"
    }
    else if(randomSelector == 1){
        showedHand = "paper"
    }
    else{
        showedHand = "scissors"
    }
    
    return showedHand;  
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()

    if(playerSelection == computerSelection){
        return "It's a tie!"
    }

    if(playerSelection == "rock"){
        if(computerSelection == "paper"){
            return "Computer wins!"
        }
        else{ //computer selects scissors
            return "Player wins!"
        }
    } else if(playerSelection == "paper"){
        if(computerSelection == "rock"){
            return "Player wins!"
        }
        else{ // computer selects scissors
            return "Computer wins!"
        }
    } else if(playerSelection == "scissors"){
        if(computerSelection == "rock"){
            return "Computer wins!"
        }
        else{ // computer selects paper
            return "Player wins"
        }
    }

}

function playGame(){
    let userPrompt = prompt();
    const computerSelection = getComputerChoice();
    console.log(computerSelection);
    console.log(playRound(userPrompt,computerSelection));
}

playGame();
