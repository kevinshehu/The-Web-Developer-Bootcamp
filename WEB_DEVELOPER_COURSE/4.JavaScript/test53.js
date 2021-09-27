function makeBetween(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}

const isChild = makeBetween(50, 100);
console.log(isChild(55));