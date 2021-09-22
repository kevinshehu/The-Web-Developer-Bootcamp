// when you create a constant array you can change an element
// but you can not reassign the array
const planets = ['The Moon', 'Venus', 'Earth', 'Mars', 'Jupiter']; //DO NOT TOUCH THIS LINE!

// YOUR CODE GOES BELOW THIS LINE:

// 1-remove the first element
planets.shift();

// 2-add in the end
planets.push('Saturn');

// 3-add at beggining
planets.unshift('Mercury');

console.log('[' + planets.toString() + ']');