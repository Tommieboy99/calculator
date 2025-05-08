let firstNumber;
let operator;
let secondNumber;

//Create a new function operate that takes an operator and two numbers and then calls one of the above functions on the numbers.

function operate (operator, a, b) {
    switch (operator) {
        case '+':
            return sum(a, b);
        case '-':
            return substract(a, b);
        case '*': 
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return 'Unknown operator';
    }
}

function sum (a, b) {
    return a + b;
}

function substract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    if (b === 0) {
        return 'Error: Division by zero';
    }

    return a / b;
}

