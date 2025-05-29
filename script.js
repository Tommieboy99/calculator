// Select all calculator buttons and display elements from the DOM:
let numberButtons = document.querySelectorAll('.button'); // 
let currentDisplay = document.querySelector('#currentDisplay');
let lastDisplay = document.querySelector('#lastDisplay');
let operatorButtons = document.querySelectorAll('.operatorButton');
let resultButton = document.querySelector('#resultButton');
let clearButton = document.querySelector('#clearButton');
let decimalButton = document.querySelector('#decimalButton');
let deleteButton = document.querySelector('#deleteButton');

// Variables to store calculator state:
let operandOne = null;
let operator = null;
let operandTwo = null;
let shouldResetDisplay = false;

// Functions for basic arithmetic operations:
let calcSum = (a, b) => a + b;
let calcSubstract = (a, b) => a - b;
let calcMultiply = (a, b) => a * b;
let calcDivide = (a, b) => b !==0 ? a / b : "Error: divide by zero";

// Performs the arithmetic operation based on the operator:
// - Converts operands to numbers with parseFloat
// - Uses switch to call the correct calculation function
// - Returns the calculation result or an error message for invalid operators
function operate(operandOne, operandTwo, operator) {
    operandOne = parseFloat(operandOne);
    operandTwo = parseFloat(operandTwo);

    switch (operator) {
        case "+":
            return calcSum(operandOne, operandTwo);
        case "-":
            return calcSubstract(operandOne, operandTwo);
        case "*":
            return calcMultiply(operandOne, operandTwo);
        case "/":
            return calcDivide(operandOne, operandTwo);
        default:
            return "Error: invalid operator";
    }
}

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        operandOne = currentDisplay.textContent;
        operator = button.textContent;
        lastDisplay.textContent = `${operandOne} ${operator}`;
        shouldResetDisplay = true;
        currentDisplay.textContent = "0";
    });
});

numberButtons.forEach(button => {
    button.addEventListener('click', () => {

        if (currentDisplay.textContent === "0" || shouldResetDisplay) {
            currentDisplay.textContent = button.textContent;
            shouldResetDisplay = false;
        } else {
            currentDisplay.textContent += button.textContent;
        }
        adjustFontSize();
    });
});

resultButton.addEventListener('click', () => {
    operandTwo = currentDisplay.textContent;
    let result = operate(operandOne, operandTwo, operator);
    currentDisplay.textContent = (typeof result === "number") 
    ? Math.round(result * 100) / 100 
    : result;
    lastDisplay.textContent = `${operandOne} ${operator} ${operandTwo} = `;
    adjustFontSize();
})

clearButton.addEventListener('click', () => {
    currentDisplay.textContent = "0";
    lastDisplay.textContent = "";
    operandOne = null;
    operandTwo = null;
    operator = null;
    shouldResetDisplay = false;
    currentDisplay.style.fontSize = "2rem";
})

decimalButton.addEventListener('click', () => {
    if (shouldResetDisplay) {
        currentDisplay.textContent = "0.";
        shouldResetDisplay = false;
    } else if (!currentDisplay.textContent.includes('.')) {
        currentDisplay.textContent += ".";
    }
})

deleteButton.addEventListener('click', () => {
    if(currentDisplay.textContent.length > 1) {
        currentDisplay.textContent = currentDisplay.textContent.slice(0, -1);
      } else {
        currentDisplay.textContent = '0';
      }
})

function adjustFontSize() {
    let fontSize = 2;

    while (currentDisplay.scrollWidth > currentDisplay.clientWidth && fontSize > 1) {
        fontSize -= 0.1;
        currentDisplay.style.fontSize = `${fontSize}rem`;
    }
}



