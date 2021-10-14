// // neseted timeout

const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext();
    }, delay);
}

// GENERIC FUNCTION
delayedColorChange('purple', 2000, () => {
    delayedColorChange('orange', 2000, () => { });
});