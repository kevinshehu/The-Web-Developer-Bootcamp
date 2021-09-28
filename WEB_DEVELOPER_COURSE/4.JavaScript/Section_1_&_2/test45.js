let variable = 5;

function change() {
    variable = 25;
}

// variable before call of the function
console.log("Before: " + variable);

// call the function
change();

// variable after call of the function
console.log("After: " + variable);