const express = require("express");
const app = express();

app.get("/cats", (req, res) => {
    res.send("MEOW!");
})

app.get("/dogs", (req, res) => {
    res.send("WOOF!");
})

app.get("/", (req, res) => {
    res.send("This is the home page LOL xD");
})

app.get("/r/:something", (req, res) => {
    // GET REQUEST
    const { something } = req.params;

    res.send(`<h1>Browsing the ${something} subreddit!</h1>`);
})

app.get("/r/:something/:postId", (req, res) => {
    // GET REQUEST
    const { something, postId } = req.params;
    
    res.send(`<h1>Browsing the ${something} subreddit!<br>ID: ${postId}</h1>`);
})

app.get("/search", (req, res) => {
    const { q } = req.query;
    res.send(`<h1>Search results for ${q}</h1>`)
})

app.post("/cats", (req, res) => {
    res.send("Post request!");
})

app.get("*", (req, res) => {
    res.send("I don't know that path!")
})

app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080");
})