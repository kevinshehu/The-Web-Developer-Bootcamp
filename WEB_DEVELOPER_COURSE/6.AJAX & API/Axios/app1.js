const jokes = document.querySelector('#jokes');
const h1 = document.querySelector('h1');

// ASYNC FUNCTION
const getDadJoke = async () => {
    try {
        // PASS HEADER
        const configuration = { headers: { Accept: 'application/json' } };

        // GET RESPONSE
        const response = await axios.get('https://icanhazdadjoke.com/', configuration);

        // RETURN
        return response.data.joke;
    }

    catch {
        return 'Sorry! An error occurred!';
    }
}

// ASYNC FUNCTION
const addNewJoke = async () => {
    // GET DATA
    const jokeText = await getDadJoke();

    // PRINT DATA
    const newLI = document.createElement('li');
    newLI.append(jokeText);
    jokes.append(newLI);
}

// ON CLICK EVENT
h1.addEventListener('click', addNewJoke);