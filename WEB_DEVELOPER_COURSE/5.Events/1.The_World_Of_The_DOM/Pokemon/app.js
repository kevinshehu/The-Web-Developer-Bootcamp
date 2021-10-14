// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

// declare container
const container = document.querySelector("#container");

const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

// loop
for (let i = 1; i < 200; i++) {
    // create div element
    const pokemon = document.createElement('div');

    // create span element
    const label = document.createElement('span');
    label.innerText = `#${i}`;

    // create img element
    const newImg = document.createElement('img');

    // give source
    newImg.src = `${baseUrl}${i}.png`;

    // append into div
    pokemon.appendChild(newImg);
    pokemon.appendChild(label);

    // append into container
    container.appendChild(pokemon);
}