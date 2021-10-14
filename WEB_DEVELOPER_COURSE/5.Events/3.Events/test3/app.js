const button = document.querySelector('button');
const h1 = document.querySelector('h1');

function makeRandomColor() {
    // get random color
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
}

button.addEventListener('click', function () {
    // define the new color
    const newColor = makeRandomColor();

    // make the new
    document.body.style.backgroundColor = newColor;

    // h1
    h1.innerText = newColor;

    h1.style.color = 'white';
    h1.style.width = 'fit-content';
});

