#! /usr/bin/env node

// Task 3:
// 3.Friend checker game:
// •Prompt the user to enter a name.
// •Use a switch statement to check if the entered name is a known friend.
// •Output a confirmation message if the name is known, otherwise output a default response.

// Answer:
import inquirer from "inquirer";

// Function to prompt the user for a name
async function promptUserForName(): Promise<string> {
    const answers = await inquirer.prompt(
        [
            {
                type: "input",
                name: "userName",
                message:"Enter a name",
                validate: (value) => {
                    return value.trim() !== "" || "Please enter a valid name";
                }
            }
        ]
    );
    return answers.userName;
}


// Function to check if the entered name is a known friend
function checkFriend(name: string): void {
    switch (name.toLowerCase()) {
        case "parizah":
        console.log(`${name} is a known friend!`);
        break;
        case "arish":
        console.log(`${name} is a known friend!`);
        break;
        case "hafsa":
        console.log(`${name} is a known friend!`);
        break;
        default:
            console.log(`Sorry, I don't know ${name}.`);
    }
}

// Main function to run the friend checker game
async function friendCheckerGame() {
    const userName = await promptUserForName();
    checkFriend(userName);
}

// Run the friend checker game
friendCheckerGame();