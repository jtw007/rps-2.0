let playerScore = 0
let computerScore = 0
//==query selectors==
const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const outcomeDiv = document.querySelector('.outcome')

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
        const p = document.createElement('p')
        p.innerText = "You lose! Paper beats Rock!"
        outcomeDiv.appendChild(p)
    }
    else if (player === choices[0] && computer === choices[2]) {
        playerScore++
        const p = document.createElement('p')
        p.innerText = 'You win! Rock beats Scissors!'
        outcomeDiv.appendChild(p)
    }      
    else if (player === choices[0] && computer === choices[0]) {
        const p = document.createElement('p')
        p.innerText = "It's a draw!"
        outcomeDiv.appendChild(p)
    } 
    else if (player === choices[1] && computer === choices[2]) {
        computerScore++
        const p = document.createElement('p')
        p.innerText = "You lose! Scissors beats Paper!"
        outcomeDiv.appendChild(p)
    }  
    else if (player === choices[1] && computer === choices[0]){
        playerScore++
        const p = document.createElement('p')
        p.innerText = 'You win! Paper beats Rock!'
        outcomeDiv.appendChild(p)
    }
    else if (player === choices[1] && computer === choices[1]) {
        const p = document.createElement('p')
        p.innerText = "It's a draw!"
        outcomeDiv.appendChild(p)
    }
    else if (player === choices[2] && computer === choices[0]) {
        computerScore++
        const p = document.createElement('p')
        p.innerText = "You lose! Rock beats Scissors!"
        outcomeDiv.appendChild(p)
    }
    else if (player === choices[2] && computer === choices[1]) {
        playerScore++
        const p = document.createElement('p')
        p.innerText = "You win! Scissors beats Paper!"
        outcomeDiv.appendChild(p)
    }
    else if (player === choices[2] && computer ===choices[2]) {
        const p = document.createElement('p')
        p.innerText = "It's a draw!"
        outcomeDiv.appendChild(p)
    }
}
// event listeners
rock.addEventListener('click', () => {
    const computer = computerChoice()
    const player = 'Rock'
    playRound(player, computer)
})

paper.addEventListener('click', () => {
    const computer = computerChoice()
    const player = 'Paper'
    playRound(player, computer)
})

scissors.addEventListener('click', () => {
    const computer = computerChoice()
    const player = 'Scissors'
    playRound(player, computer)
})

// const game = () => {
//     for (let i = 0; i < 5; i++) {
//         const playerSelection = prompt('Make your choice', 'Rock, Paper, Scissors').toLowerCase()
//         const computerSelection = computerChoice()
//         playRound(playerSelection, computerSelection)
//     }
//     if (playerScore > computerScore) {
//         return 'You are victorious!'
//     } else if (playerScore < computerScore) {
//         return 'You lost to a computer lmao'
//     } else {
//         return 'You tied with the computer'
//     }
// }

// console.log(game())

  
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

