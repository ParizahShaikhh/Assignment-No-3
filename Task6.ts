// Task 6:
// 4.Anonymous functions:
// •Assign a function expression to a variable, with one parameter that outputs the provided 
// argument to the console.
// •Pass an argument into the function.
// •Create the same function as a normal function declaration.


// Answer:
// Anonymous function assigned to a variable
const printArgument = function (arg: any): void {
    console.log(`Anonymous function output: ${arg}`);
};

// Call the anonymous function with an argument
printArgument("Hello, World!");

// Normal function declaration
function printArgumentDeclared(arg: any): void {
    console.log(`Function declaration output: ${arg}`);
}


// Call the normal function with an argument
printArgumentDeclared("Hello, again!");