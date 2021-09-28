function function1() {
    const array = [1, 2, 3, 4, 5];

    function function2() {
        for (let i = 1; i < 6; i++) {
            if (array[i] === i)
                console.log(`${array[i]} = ${i}`);
            else if (array[i] > i)
                console.log(`${array[i]} > ${i}`)
            else if (array[i] < i)
                console.log(`${array[i]} < ${i}`)
        }
    }
    // call inner function
    function2();
}

function1();