const colors = ['red', 'blue', 'violet', 'green', 'magenta', 'yellow', 'orange'];

// start point & count & item insertion

// delete
console.log(colors.splice(4, 3));
console.log(colors + "\n");

// insert
console.log(colors.splice(2, 0, 'CustomColor'));
console.log(colors + "\n");

// delete and insertion together
console.log(colors.splice(1, 1, 'DELETED!'));
console.log(colors);