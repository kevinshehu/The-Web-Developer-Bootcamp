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
            reject();
        }
    });
};

// chain promises
delayedColorChange('red')
    .then(() => {
        return delayedColorChange('purple');
    })

    .then(() => {
        return delayedColorChange('orange');
    })

    .then(() => {
        return delayedColorChange('magenta');
    })

    .then(() => {
        return delayedColorChange();
    })

    .then(() => {
        return delayedColorChange('olive');
    })

    .catch(() => {
        alert('INVALID COLOR FOUND!')
    })

