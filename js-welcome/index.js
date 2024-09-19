function greeting(user) {
    return `Hello ${'name' in user ? user.name : 'Anonym'}`;
}

const user = {
    email: 'john.doe@gmail.com',
    name: 'Peter'
}