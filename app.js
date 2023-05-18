let playerScore = 0
let computerScore = 0
//===query selectors===
const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const outcomeDiv = document.querySelector('.outcome')
const p = document.createElement('p')
const playerSpan = document.querySelector('.player-score')
const computerSpan = document.querySelector('.computer-score')
// ===refactor===
// const buttons = document.querySelectorAll('button')

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
        p.innerText = "You lose! Paper beats Rock!"
        outcomeDiv.appendChild(p)
    }
    else if (player === choices[0] && computer === choices[2]) {
        playerScore++
        p.innerText = 'You win! Rock beats Scissors!'
        outcomeDiv.appendChild(p)
    }      
    else if (player === choices[0] && computer === choices[0]) {
        p.innerText = "It's a draw!"
        outcomeDiv.appendChild(p)
    } 
    else if (player === choices[1] && computer === choices[2]) {
        computerScore++
        p.innerText = "You lose! Scissors beats Paper!"
        outcomeDiv.appendChild(p)
    }  
    else if (player === choices[1] && computer === choices[0]){
        playerScore++
        p.innerText = 'You win! Paper beats Rock!'
        outcomeDiv.appendChild(p)
    }
    else if (player === choices[1] && computer === choices[1]) {
        p.innerText = "It's a draw!"
        outcomeDiv.appendChild(p)
    }
    else if (player === choices[2] && computer === choices[0]) {
        computerScore++
        p.innerText = "You lose! Rock beats Scissors!"
        outcomeDiv.appendChild(p)
    }
    else if (player === choices[2] && computer === choices[1]) {
        playerScore++
        p.innerText = "You win! Scissors beats Paper!"
        outcomeDiv.appendChild(p)
    }
    else if (player === choices[2] && computer === choices[2]) {
        p.innerText = "It's a draw!"
        outcomeDiv.appendChild(p)
    }
}
//===refactor===
// const playRound = (player, computer) => {
//     if (player === 'rock' && computer === 'paper') {
//         computerScore++
//         p.innerText = "You lose! Paper beats Rock!"
//         outcomeDiv.appendChild(p)
//     }
//     else if (player === 'rock' && computer === 'scissors') {
//         playerScore++
//         p.innerText = 'You win! Rock beats Scissors!'
//         outcomeDiv.appendChild(p)
//     }      
//     else if (player === 'rock' && computer === 'rock') {
//         p.innerText = "It's a draw!"
//         outcomeDiv.appendChild(p)
//     } 
//     else if (player === 'paper' && computer === 'scissors') {
//         computerScore++
//         p.innerText = "You lose! Scissors beats Paper!"
//         outcomeDiv.appendChild(p)
//     }  
//     else if (player === 'paper' && computer === 'rock'){
//         playerScore++
//         p.innerText = 'You win! Paper beats Rock!'
//         outcomeDiv.appendChild(p)
//     }
//     else if (player === 'paper' && computer === 'paper') {
//         p.innerText = "It's a draw!"
//         outcomeDiv.appendChild(p)
//     }
//     else if (player === 'scissors' && computer === 'rock') {
//         computerScore++
//         p.innerText = "You lose! Rock beats Scissors!"
//         outcomeDiv.appendChild(p)
//     }
//     else if (player === 'scissors' && computer === 'paper') {
//         playerScore++
//         p.innerText = "You win! Scissors beats Paper!"
//         outcomeDiv.appendChild(p)
//     }
//     else if (player === 'scissors' && computer ==='scissors') {
//         p.innerText = "It's a draw!"
//         outcomeDiv.appendChild(p)
//     }
// }

const checkWinner = (playerScore, computerScore) => {
    console.log(`player ${playerScore} computer ${computerScore}`)
    if (playerScore === 5) {
        const h2 = document.createElement('h2')
        h2.innerText = `You won! You: ${playerScore} Computer: ${computerScore}`
        outcomeDiv.append(h2)
    } else if (computerScore === 5) {
        const h2 = document.createElement('h2')
        h2.innerText = `The computer won! You: ${playerScore} Computer: ${computerScore}`
        outcomeDiv.append(h2)
    }
}

const updateScores = (playerScore, computerScore) => {
    playerSpan.innerText = `Player score: ${playerScore}`
    computerSpan.innerText = `Computer score: ${computerScore}`
}

// ===event listeners===

//  ==refactor==
// buttons.forEach(button => {
//     button.addEventListener('click', () => {
//         const computer = computerChoice()
//         console.log(`className ${button.className}`)
//         const player = `${button.className}`
//         playRound(player, computer)
//         updateScores(playerScore, computerScore)
//         checkWinner(playerScore, computerScore)
//     })
// })
rock.addEventListener('click', () => {
    const computer = computerChoice()
    const player = 'Rock'
    playRound(player, computer)
    updateScores(playerScore, computerScore)
    checkWinner(playerScore, computerScore)
})

paper.addEventListener('click', () => {
    const computer = computerChoice()
    const player = 'Paper'
    playRound(player, computer)
    updateScores(playerScore, computerScore)
    checkWinner(playerScore, computerScore)
})

scissors.addEventListener('click', () => {
    const computer = computerChoice()
    const player = 'Scissors'
    playRound(player, computer)
    updateScores(playerScore, computerScore)
    checkWinner(playerScore, computerScore)
})






