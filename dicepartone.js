const readlineSync = require('readline-sync');

console.log("Welcome to the Dice! ");

let preference = readlineSync.question("Would you like to use a custom or standard dice? ");

function diceChoice(preference) {
    if (preference === "standard") {
        console.log("You have chosen standard ");

        let diceSize = getNumberInput("What size dice would you like to use ");

        let diceNumber = getNumberInput('How many dice would you like to roll? ');

        numOfDice(diceNumber, diceSize);
    }
    if (preference === "custom") {
        console.log("You have chosen custom ");
        let customFaces = readlineSync.question("How many faces are on your custom di? ");
        let customNumFaces = [];
        let customRolls = parseInt(readlineSync.question("How many times do you want to roll the die? "));
        customDice(customFaces, customNumFaces);
        customNumRolls(customRolls, customNumFaces);
    }
}

function customDice(customFaces, customNumFaces) {
    for (i = 1; i <= customFaces; i++) {
        let customFaceAssignment = parseInt(readlineSync.question(`What is the number on side ${[i]}? `));
        customNumFaces.push(customFaceAssignment);
    }
}

function customNumRolls(customRolls, customNumFaces) {
    let customRollTotal = [];
    for (i = 0; i < customRolls; i++) {
        console.log(customNumFaces)
        let customRollNum = Math.random() * customNumFaces[i];
        customRollNum = Math.ceil(customRollNum);
        customRollTotal.push(customRollNum);
    }
   
    const customSum = customRollTotal.reduce((total, amount) => total + amount);

    console.log(`The sum of your dice rolls are ${customSum} `);
}




function numOfDice(diceNumber, diceFace) {
    let rolls = [];
    for (i = 0; i < diceNumber; i++) {
        rolls.push(Math.ceil(Math.random() * diceFace));
    }

    const sum = rolls.reduce((total, amount) => total + amount);

    console.log(`The sum of your dice rolls are ${sum} `);
}


function getNumberInput(userPrompt) {
    while (true) {
        let userResponse = parseInt(readlineSync.question(userPrompt));
        if (!isNaN(userResponse) && userResponse > 0) {
            return userResponse
        }
        console.log("Invalid response");
    }
}

diceChoice(preference);