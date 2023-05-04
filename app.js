const player = {
    currentChoice: null
}
const computer = {
    currentChoice: null
}

const choices = ["Rock", "Paper", "Scissors"]
const randomIndex = Math.floor(Math.random() * choices.length);


//query selectors
rock = document.querySelector('#rock')
paper = document.querySelector('#paper')
scissors = document.querySelector('#scissors')

//event listeners
if (rock) {
    rock.addEventListener("click", () => {
        console.log('clicked rock')
    } 
)}

  
computer.currentChoice = choices[randomIndex];
player.currentChoice = null;
  
if (player.currentChoice === choices[0] && computer.currentChoice === choices[1]) {
    console.log("You lose! Paper beats Rock!");
}
else if (player.currentChoice === choices[0] && computer.currentChoice === choices[2]) {
    console.log('You win! Rock beats Scissors!');
}      
else if (player.currentChoice === choices[0] && computer.currentChoice === choices[0]) {
    console.log("It's a draw!");
} 
else if (player.currentChoice === choices[1] && computer.currentChoice === choices[2]) {
    console.log("You lose! Scissors beats Paper!");
}  
else if (player.currentChoice === choices[1] && computer.currentChoice === choices[0]){
    console.log('You win! Paper beats Rock!');
}
else if (player.currentChoice === choices[1] && computer.currentChoice === choices[1]) {
    console.log("It's a draw!");
}
else if (player.currentChoice === choices[2] && computer.currentChoice === choices[0]) {
    console.log("You lose! Rock beats Scissors!");
}
else if (player.currentChoice === choices[2] && computer.currentChoice === choices[1]) {
    console.log("You win! Scissors beats Paper!");
}
else if (player.currentChoice === choices[2] && computer.currentChoice ===choices[2]) {
    console.log("It's a draw!");
}

