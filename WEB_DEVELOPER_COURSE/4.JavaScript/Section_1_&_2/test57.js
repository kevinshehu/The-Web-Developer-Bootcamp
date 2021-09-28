const cat = {
    name: 'Breeze',
    breed: 'scottish',
    color: 'grey',

    meow() {
        console.log(`${this.name} says meow...`);
    }
}

// declaring a function
const meow2 = cat.meow;