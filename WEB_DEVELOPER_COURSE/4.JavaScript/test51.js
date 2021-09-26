function myFunction() {
    const variable = Math.random();

    if (variable > 0.5) {
        // function does not need a name
        return function () {
            console.log('Inside!');
        }
    }

    else {
        return function () {
            console.log('Outside!');
        }
    }
}

const mystery = myFunction();
mystery();