const button = document.querySelector('#myButton');
const h1 = document.querySelector('#h1');

// function that will be called
function success() {
    console.log('Successfully clicked!');
}

function showInfo() {
    console.log('I am a h1!');
}

// event on window load
window.onload = function () {
    console.log('Connected to the database!');
}

// event on click 
button.onclick = success;

// event on mouse enter
h1.onmouseenter = showInfo;