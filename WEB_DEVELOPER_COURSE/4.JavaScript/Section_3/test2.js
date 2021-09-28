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

movies.forEach(function (temporary) {
    console.log(`${temporary.title} - ${temporary.score}/100`);
})