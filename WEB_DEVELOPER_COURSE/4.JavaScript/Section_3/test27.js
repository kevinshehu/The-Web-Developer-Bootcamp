// DESTRUCTING PARAMS

const movies = [
    {
        title: 'test1',
        score: 34
    },

    {
        title: 'movie2',
        score: 54
    },

    {
        title: 'movie3',
        score: 88
    }
];

// print only the titles of movies with score > 50
const rates = movies.filter(({ score }) => score > 50).map(({ title }) => title);