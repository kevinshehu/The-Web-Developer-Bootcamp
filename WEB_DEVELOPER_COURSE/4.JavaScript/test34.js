const testScores = {
    name1: 85,
    name2: 99,
    name3: 17,
    name4: 55,
    name5: 92
}

let total = 0;

for (let temp of Object.values(testScores)) {
    total += temp;
}

console.log(`Total score: ${total}`);