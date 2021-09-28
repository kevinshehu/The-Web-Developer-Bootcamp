const lorem = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit', 'totam', 'hic', 'recusandae', 'magnam', 'dolores'];

let index = lorem.indexOf('kevin');

if (index !== -1) {
    console.log(`Index: ${index}`);
} else {
    console.log('Not Found!');
}

// reverse the array
lorem.reverse();

console.log('[' + lorem.toString() + ']');