// select all li
const allLI = document.querySelectorAll('li');

// iterate and change
for (let temp of allLI) {
    temp.classList.toggle('highlight');
}