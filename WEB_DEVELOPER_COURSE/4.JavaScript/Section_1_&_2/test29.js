while (true) {
    let input = prompt("Say something: ");

    if (input.toLowerCase() === 'stop') {
        break;
    } else {
        alert(input);
    }
}

console.log("OK");