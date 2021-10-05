const input = document.querySelector('input');

// key up event
input.addEventListener('keyup', function () {
    console.log('key up');
})

// key down event
input.addEventListener('keydown', function (e) {
    console.log('key down');
})

// // --------------------------------------------------------------------------------------------------------------------------------------

const input2 = document.querySelector('#test');

input2.addEventListener('keydown', function (e) {
    console.log(e.key);
    console.log(e.code);
})

// // --------------------------------------------------------------------------------------------------------------------------------------

const input3 = document.querySelector("#facebookInput");

input3.addEventListener('keydown', function (e) {
    switch (e.code) {
        case 'ArrowUp':
            console.log('up');
            break;
        case 'ArrowDown':
            console.log('down');
            break;
        case 'ArrowLeft':
            console.log('left');
            break;
        case 'ArrowRight':
            console.log('right');
            break;
        default:
            console.log('Invalid Input');
    }
})