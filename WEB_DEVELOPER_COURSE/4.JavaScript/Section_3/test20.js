// parameters with default value should come after
function greet(name, greet = 'Hey there') {
    console.log(`${greet} ${name}!`);
}