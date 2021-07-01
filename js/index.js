'use strict'

/**
 * Guesses any number from 1 to 100.
 * 
 * @returns Error code or correct number. 
 */
function guessNumber() {
    let start = 0;
    let end = 100;
    let middle;

    do {
        middle = Math.ceil((start + end) / 2);

        if (confirm(`Is your number equals ${middle}?`)) {
            return middle;
        }
        if (confirm(`Is your number less than ${middle}?`)) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }

    } while (start <= end);

    return -1;
}

const result = guessNumber();
if (result === -1) {
    alert("There is no such a number");
} else {
    alert(`Your number is ${result}`);
}