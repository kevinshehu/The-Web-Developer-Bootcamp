// select id 'container'
const container = document.querySelector('#container');

// repeat 100 times
for (let i = 0; i < 100; i++) {
    // create button element
    const button = document.createElement('button');

    // give text
    button.innerText = 'Test';

    // append inside container
    container.appendChild(button);
}