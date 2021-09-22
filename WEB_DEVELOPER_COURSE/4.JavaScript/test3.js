let isLoggedIn = false;

while (isLoggedIn === false) {
    let pass1 = prompt('Enter password: ');

    if (pass1.length < 8) {
        console.log('Password too short.');
    } else {
        let pass2 = prompt('Enter password again: ');

        if (pass1 === pass2) {
            isLoggedIn = true;
        } else {
            console.log('Passwords does not match');
        }
    }
}