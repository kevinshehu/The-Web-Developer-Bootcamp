// colors array
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

// select span
const text = document.querySelectorAll('span');

let i = 0;

// print text
for (let temp of text) {
    temp.style.color = colors[i];
    i++;
}