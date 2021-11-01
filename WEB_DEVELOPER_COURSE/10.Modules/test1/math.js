const add = (x, y) => {
    return x + y;
};

const PI = 3.14159;

const square = (x) => {
    return x * x;
}

const math = {
    add: add,
    PI: PI,
    square: square
};

// SETTING ON THE OBJECT
// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;

module.exports = math;