const h1 = document.querySelector('h1');

fetch('https://api.cryptonator.com/api/ticker/btc-usd')
    // GET THE JSON RESPONSE
    .then(response => {
        // console.log("RESPONSE, WAITING TO PARSE...", response);
        return response.json();
    })

    // SHOW DATA
    .then(data => {
        h1.innerText = "Bitcoin price: $" + parseFloat(data.ticker.price);
    })

    // DISPLAY ERROR
    .catch(e => {
        console.log("OH NO! ERROR!", e)
    })

setTimeout(() => {
    window.location.reload(true);
}, 2000);