#! /usr/bin/env node
// Task 2:
// 2.Evaluating a number game:
// •Prompt the user to enter a number.
// •Compare the entered number with a dynamic number value.
// •Output the result indicating whether the entered number is greater than, equal to, or less than the dynamic number value.
// Answer:
import inquirer from "inquirer";
// Function to prompt the user for a number
async function promptUserForNumber() {
    const answers = await inquirer.prompt([
        {
            name: "userInput",
            type: "input",
            message: "Enter a number:",
            // Validate that the input is a number
            validate: (value) => {
                // Check if the value can be converted to a number
                const valid = !isNaN(parseFloat(value));
                // Return true if valid, error message otherwise
                return valid || "Please enter a valid number";
            },
            // Automatically convert the input to a number
            filter: Number
        }
    ]);
    return answers.userInput; // Return the user's input as a number
}
// Main function to run the number game
async function numberGame() {
    const dynamicNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
    const userInput = await promptUserForNumber(); // Get the user's number
    // Compare the user's number with the dynamic number and print the result
    if (userInput > dynamicNumber) {
        console.log(`Your number ${userInput} is greater than the dynamic number ${dynamicNumber}.`);
    }
    else if (userInput < dynamicNumber) {
        console.log(`Your number ${userInput} is less than the dynamic number ${dynamicNumber}.`);
    }
    else {
        console.log(`Your number ${userInput} is equal than the dynamic number ${dynamicNumber}.`);
    }
}
// Run the number game
numberGame();
