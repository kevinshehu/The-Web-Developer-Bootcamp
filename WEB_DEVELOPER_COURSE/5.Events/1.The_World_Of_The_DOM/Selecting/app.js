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

// --------------------------------------------------------------------------------------------------------------------------------------

const linksInsidePharagraph = document.querySelectorAll('p>a');

for (let temp of linksInsidePharagraph) {
    console.log(temp.href);
}

// --------------------------------------------------------------------------------------------------------------------------------------

// get text of the pharagraph
const pharagraphText = document.querySelector('p').innerText;
console.log(pharagraphText);

// --------------------------------------------------------------------------------------------------------------------------------------

// change every link in the page
const allLinks = document.querySelectorAll('a');
for (let temp of allLinks) {
    temp.innerText = 'CLICK ME MF!';
}

// --------------------------------------------------------------------------------------------------------------------------------------

const firstLink = document.querySelector('a');

firstLink.innerText = 'TEST';

// get href
console.log(firstLink.getAttribute('href'));

// set href
firstLink.setAttribute('href', 'https://www.google.com/');

// --------------------------------------------------------------------------------------------------------------------------------------

const textInput = document.querySelector('input[type="text"]');

// change type to password
textInput.type = 'password';

// --------------------------------------------------------------------------------------------------------------------------------------

// check style
// this will show only inline styles (in .html file) not styles declared in other files
const h1 = document.querySelector('h1');

// --------------------------------------------------------------------------------------------------------------------------------------

// // change all links
const allLinks = document.querySelectorAll('a');
for (let temp of allLinks) {
    temp.style.color = 'magenta';
}

// // change all phargraphs
const allPharagraph = document.querySelectorAll('p');
for (let temp of allPharagraph) {
    temp.style.color = 'olive';
}

// --------------------------------------------------------------------------------------------------------------------------------------

// // object
const p = document.querySelector('p');

// // object properties
const pharagraphFontSize = window.getComputedStyle(p).fontSize;
const pharagrapMargin = window.getComputedStyle(p).margin;
const pharagrapFontFamily = window.getComputedStyle(p).fontFamily;

// --------------------------------------------------------------------------------------------------------------------------------------

// get attribute
const h2 = document.querySelector('h2');

h2.getAttribute('class');

// class = 'purple'
h2.setAttribute('class', 'purple');

// CLASS LIST
h2.classList.add('testClass');      // add
h2.classList.remove('testClass');   // remove
h2.classList.contains('myClass');   // check for class (true / false)
h2.classList.toggle('border2');     // class being (on / off) --> (remove / add)

// --------------------------------------------------------------------------------------------------------------------------------------

const firstBold = document.querySelector('b');
firstBold.parentElement.parentElement.parentElement;

const parentPharagraph = firstBold.parentElement;
parentPharagraph.children[0]

// --------------------------------------------------------------------------------------------------------------------------------------

const squareImg = document.querySelector('.square');
// squareImg.nextSibling;    --> sometimes it return text nodes so better use nextElementSibling
// squareImg.nextElementSibling

// --------------------------------------------------------------------------------------------------------------------------------------

// create an img element
const newElement = document.createElement('img');

// give source
newElement.src = 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg';

newElement.classList.add('square');

// append new element as the last child of the body
document.body.appendChild(newElement);

// --------------------------------------------------------------------------------------------------------------------------------------

const new_h3 = document.createElement('h3');
new_h3.innerText = 'I was created with JS!';
new_h3.style.color = 'red';
new_h3.style.backgroundColor = 'black';
new_h3.style.borderRadius = '30%';
new_h3.style.textAlign = 'center';
document.body.prepend(new_h3);

// --------------------------------------------------------------------------------------------------------------------------------------

const new_new_h3 = document.createElement('h3');
new_new_h3.innerText = 'NOT ME!';
new_new_h3.insertAdjacentElement('afterend', new_h3);   // insert after

const first_LI = document.querySelector('li');
const my_UL = first_LI.parentElement;

// remove child
my_UL.removeChild(first_LI);

// or we can remove child like this
// first_LI.parentElement.removeChild(first_LI)

// --------------------------------------------------------------------------------------------------------------------------------------

// // remove directly w/o parent element
const img = document.querySelector('img').remove()

// // --------------------------------------------------------------------------------------------------------------------------------------