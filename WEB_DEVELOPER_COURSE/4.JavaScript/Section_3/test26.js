// DESTRUCTING OBJECTS

const user = {
    email: 'kevinshehu19@gmail.com',
    password: 'passwordTes',
    firstName: 'Kevin',
    lastName: 'Shehu',
    born: 2000,
    bio: '',
    state: 'AL'
}

// pass the value to each variable
// we single them out
const { email, firstName, lastName, password, born, bio, state } = user;

// same as saying:
// const birthYear = user.born;
const { born: birthYear = 'N/A' } = user;

const { language = 'N/A' } = user;