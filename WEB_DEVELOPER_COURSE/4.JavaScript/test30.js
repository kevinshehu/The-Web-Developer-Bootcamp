// take input 
let maxNumber = parseInt(prompt("Enter the maximum number: "));

// false input
while (!maxNumber) {                                                    // input should not be 0, because 0 == false
    maxNumber = parseInt(prompt("Enter a valid number: "));
}

// random number
const targetNumber = Math.floor(Math.random() * maxNumber) + 1;

// counter
let counter = 1;

// take input
let guess = parseInt(prompt("Enter your first guess: "));

// check guess
while (guess !== targetNumber) {
    // increase counter
    counter++;

    // quit
    if ((guess.toString).toLowerCase() === "quit") {
        break;
    }

    // higher
    else if (guess > targetNumber) {
        guess = parseInt(prompt("Too high!\nEnter a new guess: "));
    }

    // lower
    else if (guess < targetNumber) {
        guess = parseInt(prompt("Too low!\nEnter a new guess: "));
    }

    // invalid
    else {
        guess = prompt("Invalid input!\nTry again: ");
    }
}

// end
console.log("Number: " + targetNumber);
console.log("Counter: " + counter);