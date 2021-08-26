// IMPORT MODULES under test here:
import { add } from '../calculator.js';
import { subtract } from '../calculator.js';
import { multiply } from '../calculator.js';
import { divide } from '../calculator.js';


const test = QUnit.test;

test('divide function', (expect) => {
    const expected = 5;

    const actual = divide(25, 5);
    expect.equal(actual, expected);
});

test('multiply function', (expect) => {
    const expected = 10;

    const actual = multiply(2, 5);
    expect.equal(actual, expected);
});

test('subtract function', (expect) => {
    const expected = 1;

    const actual = subtract(4, 3);
    expect.equal(actual, expected);
});

test('add function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 5;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = add(2, 3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

