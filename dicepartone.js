const readlineSync = require('readline-sync');

console.log("Welcome to the Dice! ");

let diceNumber = readlineSync.question('How many dice would you like to roll? ');

    let rolls = [];
    for (i = 0; i < diceNumber; i++) {
        rolls.push(Math.ceil( Math.random() * 6 ));
    }

console.log(`The results of your dice are ${rolls} `);
