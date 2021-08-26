import { add } from './calculator.js';


const addNumber1 = document.getElementById('add-number-1');
const addNumber2 = document.getElementById('add-number-2');
const addButton = document.getElementById('add-button');
const addAnswer = document.getElementById('add-answer');
//console.log(addNumber1, addNumber2, addButton, addAnswer);

addButton.addEventListener('click', () => {
    const num1 = Number(addNumber1.value);
    const num2 = Number(addNumber2.value);

    const sum = add(num1, num2);
    addAnswer.textContent = sum;
    
    //console.log('This button was clicked');
});


