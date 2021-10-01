// get all elements of name img
// allImgs is a collection not an array
const allImgs = document.getElementsByTagName('img');

for (let temp of allImgs) {
    console.log(temp.src);
}

// change all img soruces
for (let temp of allImgs) {
    temp.src = 'https://www.timeoutdubai.com/public/styles/full_img/public/images/2020/07/13/IMG-Dubai-UAE.jpg?itok=j4dmDDZa';
}

const linksInsidePharagraph = document.querySelectorAll('p>a');

for (let temp of linksInsidePharagraph) {
    console.log(temp.href);
}

// get text of the pharagraph
const pharagraphText = document.querySelector('p').innerText;
console.log(pharagraphText);

// change every link in the page
const allLinks = document.querySelectorAll('a');
for (let temp of allLinks) {
    temp.innerText = 'CLICK ME MF!';
}


const firstLink = document.querySelector('a');

firstLink.innerText = 'TEST';

// get href
console.log(firstLink.getAttribute('href'));

// set href
firstLink.setAttribute('href', 'https://www.google.com/');

const textInput = document.querySelector('input[type="text"]');

// change type to password
textInput.type = 'password';