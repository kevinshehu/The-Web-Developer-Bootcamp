// select
const tweetForm = document.querySelector('#tweetForm');
const tweets = document.querySelector('#tweets');

tweetForm.addEventListener('submit', function (e) {
    // prevent default form action
    e.preventDefault();

    const username = tweetForm.elements.username.value;
    const tweet = tweetForm.elements.tweet.value;

    // call function
    addTweet(username, tweet);

    // clear field (reset)
    tweetForm.elements.username.value = '';
    tweetForm.elements.tweet.value = '';
});

// function
function addTweet(username, tweet) {
    const newTweet = document.createElement('li');
    const boldUsername = document.createElement('b');

    // make username bold
    // <b>username</b>
    boldUsername.append(username);

    // add bold username to <li>
    newTweet.append(boldUsername);

    // add tweet
    newTweet.append(` - ${tweet}`);

    // add to the <ul>
    tweets.append(newTweet);
}