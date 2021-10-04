const buttons = document.querySelectorAll('button');

function makeRandomColor() {
    // get random color
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
}


for (let temporary of buttons) {
    temporary.addEventListener('click', function () {
        // define the new color
        const newColor = makeRandomColor();

        // make the new
        temporary.style.backgroundColor = newColor;
    })
}

// // --------------------------------------------------------------------------------------------------------------------------------------

const h1_All = document.querySelectorAll('h1');

function colorize() {
    this.style.backgroundColor = makeRandomColor();
    this.style.color = makeRandomColor();
}

for (let h1 of h1_All) {
    h1.addEventListener('click', col);
}