const readlineSync = require('readline-sync');

console.log("Welcome to the Dice! ");

/*
const dice = {
    sides: 6,
    roll: function roll() {
       randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
    }
}

//returning a number to the user 

dice.roll();
*/

var diceRoll = Math.floor( Math.random() * 6 ) +1;
console.log('You rolled a ' + diceRoll);
