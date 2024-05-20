// Task 4:
// 4.Functions:
// •Set up two different variables with different values.
// •Call a function with these variables as arguments and output the result using console.log.
// •Create a second call to the function with two more numbers as arguments.
// Answer:
// Function to add to number
function addNumbers(num1, num2) {
    return num1 + num2;
}
// Set up two different variables with different values
const var1 = 5;
const var2 = 10;
// Call a function with these variables as arguments and output the result using console.log
let result1 = addNumbers(var1, var2);
console.log(`The sum of ${var1} and ${var2} is ${result1}.`);
// Create a second call to the function with two more numbers as arguments
let var3 = 15;
let var4 = 20;
let result2 = addNumbers(var3, var4);
console.log(`The sum of ${var3} and ${var4} is ${result2}.`);
export {};
