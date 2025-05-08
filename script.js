const digitButtons = document.querySelectorAll('#digitButton');
const operatorButtons = document.querySelectorAll('#operatorButton');
const display = document.querySelector('.calculator-display');
const clearButton = document.querySelector('.clearButton')
const resultButton = document.querySelector('#resultButton');

let currentInput = '';
let firstNumber = null;
let operator = null
let secondNumber = null;

//event listener for the number buttons
digitButtons.forEach(button => {
    button.addEventListener("click", () => {
        const input = button.textContent;
        currentInput += input;
        display.textContent = currentInput;
    })
})

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (firstNumber === 0) {
            firstNumber = Number(currentInput);
            currentInput = '';
        }
        operator = button.textContent;
        display.textContent = operator;
    })
})

resultButton.addEventListener("click", () => {
    if (firstNumber !== null && currentInput !== '') {
        let secondNumber = Number(currentInput);
        let result = operate(operator, firstNumber, secondNumber);
        display.textContent = result;

        firstNumber = result;
        currentInput = '';
        operator = null;
    }
})


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

