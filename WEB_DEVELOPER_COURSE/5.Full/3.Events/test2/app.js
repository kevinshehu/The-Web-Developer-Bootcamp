const button1 = document.querySelector("#v1");
const button2 = document.querySelector("#v2");
const button3 = document.querySelector("#v3");
const button4 = document.querySelector("#v4");

// BUTTON 1

// event
button1.addEventListener('click', function () {
    console.log('Button 1');
})


// BUTTON 2

function showClick() {
    console.log('Button 2')
}

button2.addEventListener('mouseup', showClick);


// BUTTON 3

function twist() {
    console.log('TWIST!');
}

function shout() {
    console.log('SHOUT!');
}

// only twist will be called
// button3.onclick = twist;
// button3.onclick = shout;

// have multiple events for one button
button3.addEventListener('click', twist);
button3.addEventListener('click', shout);


// BUTTON 4

function sayHelloOnce() {
    console.log('Hello there!');
}

// when it comes true the event will be removed
button4.addEventListener('click', sayHelloOnce, { once: true });