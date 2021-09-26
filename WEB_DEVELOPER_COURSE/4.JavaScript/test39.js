function addNumbers(num1 = 0, num2 = 0) {
    let result = 0;

    if (typeof (num1) === 'number' && typeof (num2) === 'number') {
        result = parseInt(num1) + parseInt(num2);
        console.log(`Result = ${result}`);
    }
}

addNumbers('test', 5);