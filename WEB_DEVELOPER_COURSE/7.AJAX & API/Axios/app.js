// AXIOS PROMISE
axios.get('https://api.cryptonator.com/api/ticker/btc-usd')

    // GET DATA
    .then(response => {
        console.log(response.data.ticker.price);
    })

    // CATCH ERROR
    .catch(error => {
        console.log(error);
    })