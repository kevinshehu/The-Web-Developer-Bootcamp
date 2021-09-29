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

const highest = movies.reduce((bestMovie, temporary) => {
    if (temporary.score > bestMovie.score)
        return temporary.title;
    return bestMovie.title;
})