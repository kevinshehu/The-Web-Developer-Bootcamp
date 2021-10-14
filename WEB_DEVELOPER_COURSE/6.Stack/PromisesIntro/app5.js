const login = async (username, password) => {
    if (!username || !password)
        throw 'Missing Credentials'
    if (password.toLowerCase() === 'ksh')
        return 'WELCOME KSH!'
    throw 'Invalid User!'
}

login('KEVIN', 'ksh')
    .then(msg => {
        console.log("LOGGED IN!")
        console.log(msg)
    })
    .catch(err => {
        console.log("ERROR!")
        console.log(err)
    })