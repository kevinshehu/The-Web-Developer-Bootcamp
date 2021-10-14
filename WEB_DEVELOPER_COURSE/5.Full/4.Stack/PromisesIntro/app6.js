// function to check if a string represents a css color
function isValidColor(strColor) {
    var s = new Option().style;
    s.color = strColor;

    // return 'false' if color wasn't assigned
    return s.color == strColor.toLowerCase();
}

// THE PROMISE VERSION
const delayedColorChange = (newColor) => {
    return new Promise((resolve, reject) => {
        if (isValidColor(newColor)) {
            setTimeout(() => {
                // change color
                document.body.style.backgroundColor = newColor;

                // success
                resolve();
            }, 1500);
        } else {
            reject('NON DEFINED COLOR!');
        }
    });
};

async function rainbow() {
    await delayedColorChange('red')
    await delayedColorChange('blue')
    await delayedColorChange('violet')
    await delayedColorChange('orange')
}

rainbow()
    .then(() => {
        console.log('END OF RAINBOW!');
    })

    .catch(() => {
        console.log('ERROR!');
    })