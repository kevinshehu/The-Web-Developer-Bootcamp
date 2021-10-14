// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}

fakeRequestCallback(
    'fuck?books.com',

    // success callback
    function (success) {
        console.log('IT WORKED!');
        console.log(success);

        // second request
        fakeRequestCallback(
            'books/secondpage.com',

            function (success2) {
                console.log('Worked 2nd request!');
                console.log(success2);
            },

            function (error2) {
                console.log('Failed 2nd request!');
                console.log(error2);
            }
        );
    },

    // failure callback
    function (error) {
        console.log('ERROR!');
        console.log(error);
    }
);