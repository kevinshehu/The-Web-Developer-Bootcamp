const arrayNumbers = [1, 2, 3, 4, 5];

// for of
for (let temp of arrayNumbers) {
    console.log(temp);
}

console.log("\n---------------------\n");

const names = [
    ['Liam', 'Olivia'],
    ['Noah', 'Emma'],
    ['Oliver', 'Ava'],
    ['Elijah', 'Charlotte']
];

for (let row of names) {
    for (let st of row) {
        console.log(st);
    }
    console.log();
}

console.log("---------------------\n");

for (let ch of "FUCK YOU") {
    console.log(ch);
}