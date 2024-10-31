let firstNumber = '';
let secondNumber = '';
let operator = '';
let shouldResetDisplay = false;
const display = document.getElementById("display");


function appendNumber(number) {
    if (shouldResetDisplay) {
        display.value = '';
        shouldResetDisplay = false;
    }
    display.value += number;
    if (operator === '') {
        firstNumber += number;
    } else {
        secondNumber += number;
    }
}

function appendOperator(op) {
    if (operator !== '' && secondNumber !== '') {
        calculateResult();
    }
    operator = op;
    shouldResetDisplay = true;
}

function clearDisplay() {
    display.value = '';
    firstNumber = '';
    secondNumber = '';
    operator = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
    if (operator === '') {
        firstNumber = firstNumber.slice(0, -1);
    } else {
        secondNumber = secondNumber.slice(0, -1);
    }
}

function calculateResult() {
    let result;
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);
    if (isNaN(num1) || isNaN(num2)) return;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                display.value = 'Error';
                return;
            }
            result = num1 / num2;
            break;
        default:
            return;
    }
    display.value = result;
    firstNumber = result.toString();
    secondNumber = '';
    operator = '';
    shouldResetDisplay = true;
}