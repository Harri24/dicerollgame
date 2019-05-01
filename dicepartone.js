const readlineSync = require('readline-sync');

console.log("Welcome to the Dice! ");

function numOfDice(diceNumber, diceFace){
    let rolls = [];
    for (i = 0; i < diceNumber; i++) {
        rolls.push(Math.ceil( Math.random() * diceFace ));
    }

    const sum = rolls.reduce((total, amount) => total + amount); 

console.log(`The results of your dice are ${sum} `);
}


function getNumberInput(userPrompt){
    while (true){
   let userResponse = parseInt(readlineSync.question(userPrompt));
   if (!isNaN(userResponse) && userResponse > 0){
       return userResponse
   }
   console.log("Invalid response");
    }
}

let diceSize = getNumberInput("What size dice would you like to use");

let diceNumber = getNumberInput('How many dice would you like to roll? ');
numOfDice(diceNumber, diceSize); 

