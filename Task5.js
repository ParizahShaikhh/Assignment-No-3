// Task 5:
// 3.Calculator project using function:
// •Set up two variables containing number values.
// •Set up a variable to hold an operator (+ or - ).
// •Create a function that takes two numbers and an operator as parameters, performs the 
// corresponding operation, and returns the result.
// •Call the function with the variables and operator, and output the result using console.log.
// •Update the operator value and call the function again with the updated arguments.
// Answer:
// Function to perform the corresponding operation based on the operator
function calculate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        default:
            return "Invalid operator";
    }
}
// Set up two variables containing number values
let firstNumber = 7;
let secondNumber = 4;
// Set up a variable to hold an operator (+ or -)
let operator = "+";
// Call the function with the variables and operator, and output the result using console.log
let result = calculate(firstNumber, secondNumber, operator);
console.log(`The result of ${firstNumber} ${operator} ${secondNumber} is ${result}.`);
// Update the operator value and call the function again with the updated arguments
operator = "-";
result = calculate(firstNumber, secondNumber, operator);
console.log(`The result of ${firstNumber} ${operator} ${secondNumber} is ${result}.`);
export {};
