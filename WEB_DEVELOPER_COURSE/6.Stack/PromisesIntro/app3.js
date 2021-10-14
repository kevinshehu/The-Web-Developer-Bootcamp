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
        }, delay);
    });
};

// CHECK EACH REQUEST (PROMISE)
// SEQUENTIAL REQUESTS
fakeRequestPromise('www.wikipedia/page1.com')
    .then((data) => {
        console.log('IT WORKED, PAGE 1 !');
        console.log(data);
        return fakeRequestPromise('www.wikipedia/page2.com')
    })

    .then((data) => {
        console.log('IT WORKED, PAGE 2 !');
        console.log(data);
        return fakeRequestPromise('www.wikipedia/page3.com')
    })

    .then((data) => {
        console.log('IT WORKED, PAGE 3 !');
        console.log(data);
    })

    .catch((error) => {
        console.log('A REQUEST FAILED !');
        console.log(error);
    })