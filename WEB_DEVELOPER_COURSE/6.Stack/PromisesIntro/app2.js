// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
};

// new syntax
const request = fakeRequestPromise('mulliri/api/coffe.com')
    // success
    .then(
        () => {
            console.log('promise resolved');
            console.log('it worked!');
        }
    )

    // fail
    .catch(
        () => {
            console.log('promise rejected');
            console.log('error!');
        }
    );