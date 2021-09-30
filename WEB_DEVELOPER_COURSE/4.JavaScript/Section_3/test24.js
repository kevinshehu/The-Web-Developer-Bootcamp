// REST 

// not a fixed number of parameters
function sum(...parameters) {
    return parameters.reduce((total, temporary) => total + temporary);
}

function printRaceResults(gold, silver, ...others) {
    console.log(`Gold goes to ${gold}\n`);
    console.log(`Silver goes to ${silver}\n`);
    console.log(`Thanks to eveyrone else :${others}`);
}