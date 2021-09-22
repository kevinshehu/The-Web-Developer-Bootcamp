const word = "EPOKA";

let guess = prompt("Guess my word: ");

while (guess !== word) {
    guess = prompt("Guess my word: ");
}

console.log("Well done!");