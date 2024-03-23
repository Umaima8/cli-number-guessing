#! /usr/bin/env node
import inquirer from "inquirer";
//1) Computer will generate a random number
//2) Take the input from the user
//3) compare the user input with computer's generated number and show results
const RandomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please enter a number between 1 - 10: "
    }
]);
if (answers.userGuessedNumber === RandomNumber) {
    console.log("Congratualtions!You have guessed the right number");
}
else {
    console.log("Wrong answer!Try again");
}
