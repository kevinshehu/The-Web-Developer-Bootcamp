// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         // THIS RETURNS A PROMISE
//         return res.json()
//     })

//     // GET DATA
//     .then(data => {
//         console.log("DATA PARSED...")
//         console.log(data.ticker.price)
//     })

//     // SHOW ERROR
//     .catch(e => {
//         console.log("OH NO! ERROR!", e)
//     })

const showBitcoinPrice = async () => {
    try {
        const response = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
        const data = await response.json();
        console.log(data.ticker.price);
    } catch {
        console.log('Error occurred!');
    }
}