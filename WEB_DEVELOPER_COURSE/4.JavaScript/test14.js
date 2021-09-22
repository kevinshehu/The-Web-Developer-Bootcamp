const array1 = [1, 2, 3];
const array2 = [1, 2, 3];

// arrays does not allocate the same space
console.log(array1 === array2);

const array1Copy = array1;

// arrays allocate the same space in memory
console.log(array1 === array1Copy);