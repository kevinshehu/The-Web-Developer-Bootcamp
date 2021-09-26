function callAnotherFunction(func) {
    func();
    func();
}

function rollDie() {
    const roll = Math.floor(Math.random() * (6 - 1) + 1);
    console.log(`Dice: ${roll}`);
}

// pass a function as a argument
callAnotherFunction(rollDie);