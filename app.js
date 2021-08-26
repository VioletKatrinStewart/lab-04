import { add } from './calculator.js';
import { subtract } from './calculator.js';
import { multiply } from './calculator.js';
import { divide } from './calculator.js';

const addNumber1 = document.getElementById('add-number-1');
const addNumber2 = document.getElementById('add-number-2');
const addButton = document.getElementById('add-button');
const addAnswer = document.getElementById('add-answer');

const subtractNumber1 = document.getElementById('subtract-number-1');
const subtractNumber2 = document.getElementById('subtract-number-2');
const subtractButton = document.getElementById('subtract-button');
const subtractAnswer = document.getElementById('subtract-answer');

const multiplyNumber1 = document.getElementById('multiply-number-1');
const multiplyNumber2 = document.getElementById('multiply-number-2');
const multiplyButton = document.getElementById('multiply-button');
const multiplyAnswer = document.getElementById('multiply-answer');

const divisionNumber1 = document.getElementById('division-number-1');
const divisionNumber2 = document.getElementById('division-number-2');
const divisionButton = document.getElementById('division-button');
const divisionAnswer = document.getElementById('division-answer');

//console.log(addNumber1, addNumber2, addButton, addAnswer);

addButton.addEventListener('click', () => {
    const num1 = Number(addNumber1.value);
    const num2 = Number(addNumber2.value);

    const sum = add(num1, num2);
    addAnswer.textContent = sum;

    //console.log('This button was clicked')
});
subtractButton.addEventListener('click', () => {
    const num1 = Number(subtractNumber1.value);
    const num2 = Number(subtractNumber2.value);

    const sum = subtract(num1, num2);
    subtractAnswer.textContent = sum;
});
multiplyButton.addEventListener('click', () => {
    const num1 = Number(multiplyNumber1.value);
    const num2 = Number(multiplyNumber2.value);

    const sum = multiply(num1, num2);
    multiplyAnswer.textContent = sum;
});

divisionButton.addEventListener('click', () => {
    const num1 = Number(divisionNumber1.value);
    const num2 = Number(divisionNumber2.value);

    const sum = divide(num1, num2);
    divisionAnswer.textContent = sum;
});




