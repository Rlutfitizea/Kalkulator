// script.js

let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(operator) {
    currentInput += ' ' + operator + ' ';
    display.value = currentInput;
}

function appendFunction(func) {
    currentInput += func + '(';
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function calculateResult() {
    try {
        // Menyelesaikan ekspresi ilmiah
        currentInput = currentInput.replace(/sin|cos|tan|log|sqrt/g, function(match) {
            switch(match) {
                case 'sin': return 'Math.sin';
                case 'cos': return 'Math.cos';
                case 'tan': return 'Math.tan';
                case 'log': return 'Math.log';
                case 'sqrt': return 'Math.sqrt';
            }
        });

        // Evaluasi ekspresi matematika
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
    } catch (error) {
        display.value = 'Error';
        currentInput = '';
    }
}
