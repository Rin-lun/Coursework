function greetingUser(user) {
    user.age = 50;
    alert(`Hey, ${user.name} ${user.surname}. You will be ${user.age + 1} next year`);
}

const user = {
    name: 'John',
    surname: 'Doe',
    age: 19
}
