// array of objects
const movies = [
    {
        title: 'test1',
        score: 50
    },

    {
        title: 'test2',
        score: 22
    },

    {
        title: 'test3',
        score: 99
    }
]

const newMovies = movies.map(temp => (
    `${temp.title} - ${temp.score} / 10`
))