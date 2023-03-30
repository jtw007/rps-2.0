const player = {
    currentChoice: null
}
const computer = {
    currentChoice: null
}
//rock paper scissors  
const choices = ["Lapis", "Papyrus", "Scalpellus"]
const randomIndex = Math.floor(Math.random() * choices.length);


//query selectors
lapis = document.querySelector('#lapis')
papyrus = document.querySelector('#papyrus')
scalpellus = document.querySelector('#scalpellus')
  
computer.currentChoice = choices[randomIndex];
player.currentChoice = choices[0];
  
if (player.currentChoice === choices[0] && computer.currentChoice === choices[1]) {
    console.log("You lose! Papyrus beats Lapis!");
}
else if (player.currentChoice === choices[0] && computer.currentChoice === choices[2]) {
    console.log('You win! Lapis beats Scalpellus!');
}      
else if (player.currentChoice === choices[0] && computer.currentChoice === choices[0]) {
    console.log("It's a draw!");
} 
else if (player.currentChoice === choices[1] && computer.currentChoice === choices[2]) {
    console.log("You lose! Scalpellus beats Papyrus!");
}  
else if (player.currentChoice === choices[1] && computer.currentChoice === choices[0]){
    console.log('You win! Papyrus beats Lapis!');
}
else if (player.currentChoice === choices[1] && computer.currentChoice === choices[1]) {
    console.log("It's a draw!");
}
else if (player.currentChoice === choices[2] && computer.currentChoice === choices[0]) {
    console.log("You lose! Lapis beats Scalpellus!");
}
else if (player.currentChoice === choices[2] && computer.currentChoice === choices[1]) {
    console.log("You win! Scalpellus beats Papyrus!");
}
else if (player.currentChoice === choices[2] && computer.currentChoice ===choices[2]) {
    console.log("It's a draw!");
}