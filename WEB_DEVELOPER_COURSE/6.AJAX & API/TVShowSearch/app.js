const form = document.querySelector('#searchForm');

// GET AN ARRAY OF SHOWS
const makeImages = (shows) => {
    // EACH SHOW
    for (let result of shows) {
        // CHECK IF HAS IMAGE PROPERTY
        if (result.show.image) {
            // CREATE IMAGE
            const img = document.createElement('IMG');

            // GIVE SOURCE
            img.src = result.show.image.medium;

            // SHOW
            document.body.append(img)
        }
    }
}

// FUNCTION TO REMOVE ALL IMAGES
const removeImages = () => {
    const allImages = document.body.querySelectorAll('img');

    for (let temp of allImages) {
        temp.remove();
    }
}

form.addEventListener('submit', async function (e) {
    // PREVENT DEFAULT ACTION
    e.preventDefault();

    removeImages();

    // GET INPUT
    const searchTerm = form.elements.query.value;

    // GET DATA FROM JSON
    const config = { params: { q: searchTerm } }
    const response = await axios.get(`http://api.tvmaze.com/search/shows`, config);

    // CALL FUNCTIOM
    makeImages(response.data)

    // RESET
    form.elements.query.value = '';
})