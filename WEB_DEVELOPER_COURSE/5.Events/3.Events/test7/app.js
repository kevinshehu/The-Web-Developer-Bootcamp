const input = document.querySelector('input');
const h1 = document.querySelector('h1');

input.addEventListener('input', function () {
    if (!input.value) {
        h1.innerText = 'Enter Your Username';
    } else {
        // get the live value of input
        h1.innerText = `Welcome, ${input.value}`;
    }
});