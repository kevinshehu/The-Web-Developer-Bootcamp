// SPREAD IN OBJECTS

const feline = {
    legs: 4,
    family: 'Felidae'
}

const canie = {
    isFurry: true,
    family: 'Caninae'
}

const copyForFeline = { ...feline, color: 'black' };

// conflict because they have both family
// last element wins
const copyForBoth = { ...feline, ...canie };