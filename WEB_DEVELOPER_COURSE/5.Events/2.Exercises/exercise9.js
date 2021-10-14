const helloButton = document.querySelector('#hello');
const goodbyeButton = document.querySelector('#goodbye');

helloButton.addEventListener('click', function () {
    console.log('hello');
})

goodbyeButton.addEventListener('click', function () {
    console.log('goodbye');
})