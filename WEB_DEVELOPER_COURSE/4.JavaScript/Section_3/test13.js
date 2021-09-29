const movies = [
    {
        title: 'move1',
        score: 20
    },

    {
        title: 'movie2',
        score: 55
    },

    {
        title: 'movie3',
        score: 99
    }
]

const goodMovies = movies.filter(m => m.score >= 55).map(m => m.title);

