let playerScore = 0
let computerScore = 0

const choices = ["Rock", "Paper", "Scissors"]
const randomIndex = Math.floor(Math.random() * 3);

const computerChoice = () => {
    randomIndex
    const computerChoice = choices[randomIndex]
    return computerChoice
}

const playRound = (player, computer) => {
    if (player === choices[0] && computer === choices[1]) {
        computerScore++
        return "You lose! Paper beats Rock!"
    }
    else if (player === choices[0] && computer === choices[2]) {
        playerScore++
        return 'You win! Rock beats Scissors!'
    }      
    else if (player === choices[0] && computer === choices[0]) {
        return "It's a draw!"
    } 
    else if (player === choices[1] && computer === choices[2]) {
        computerScore++
        return "You lose! Scissors beats Paper!"
    }  
    else if (player === choices[1] && computer === choices[0]){
        playerScore++
        return 'You win! Paper beats Rock!'
    }
    else if (player === choices[1] && computer === choices[1]) {
        return "It's a draw!"
    }
    else if (player === choices[2] && computer === choices[0]) {
        computerScore++
        return "You lose! Rock beats Scissors!"
    }
    else if (player === choices[2] && computer === choices[1]) {
        playerScore++
        return "You win! Scissors beats Paper!"
    }
    else if (player === choices[2] && computer ===choices[2]) {
        return "It's a draw!"
    }
}


const game = () => {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Make your choice', 'Rock, Paper, Scissors').toLowerCase()
        const computerSelection = computerChoice()
        playRound(playerSelection, computerSelection)
    }
    if (playerScore > computerScore) {
        return 'You are victorious!'
    } else if (playerScore < computerScore) {
        return 'You lost to a computer lmao'
    } else {
        return 'You tied with the computer'
    }
}

console.log(game())

//==query selectors==
rock = document.querySelector('#rock')
paper = document.querySelector('#paper')
scissors = document.querySelector('#scissors')

//==event listeners==
if (rock) {
    rock.addEventListener("click", () => {
        console.log('clicked rock')
    } 
)}

  
// computer.currentChoice = choices[randomIndex];
// player.currentChoice = null;
  
// if (player.currentChoice === choices[0] && computer.currentChoice === choices[1]) {
//     console.log("You lose! Paper beats Rock!");
// }
// else if (player.currentChoice === choices[0] && computer.currentChoice === choices[2]) {
//     console.log('You win! Rock beats Scissors!');
// }      
// else if (player.currentChoice === choices[0] && computer.currentChoice === choices[0]) {
//     console.log("It's a draw!");
// } 
// else if (player.currentChoice === choices[1] && computer.currentChoice === choices[2]) {
//     console.log("You lose! Scissors beats Paper!");
// }  
// else if (player.currentChoice === choices[1] && computer.currentChoice === choices[0]){
//     console.log('You win! Paper beats Rock!');
// }
// else if (player.currentChoice === choices[1] && computer.currentChoice === choices[1]) {
//     console.log("It's a draw!");
// }
// else if (player.currentChoice === choices[2] && computer.currentChoice === choices[0]) {
//     console.log("You lose! Rock beats Scissors!");
// }
// else if (player.currentChoice === choices[2] && computer.currentChoice === choices[1]) {
//     console.log("You win! Scissors beats Paper!");
// }
// else if (player.currentChoice === choices[2] && computer.currentChoice ===choices[2]) {
//     console.log("It's a draw!");
// }

