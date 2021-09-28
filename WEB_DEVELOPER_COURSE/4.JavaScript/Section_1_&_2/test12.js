const colors = ['red', 'blue', 'violet', 'green', 'magenta', 'yellow', 'orange'];


console.log("No arguments:");
console.log(colors.slice());

console.log("\nStart and end point:");
console.log(colors.slice(0, 2));

console.log("\nOnly start point:");
console.log(colors.slice(5));

// you can assign other arrays
const fourColors = colors.slice(2, 6);
console.log("\nfourColors = [" + fourColors + "]");