const users = [
    {
        name: "John",
        lastName: "Doe",
        age: 19,
        email: "john.doe@gmail.com",
    },
    {
        name: "Jane",
        lastName: "Doe",
        age: 22,
        email: "jane.doe@gmail.com",
    },
    {
        name: "Jackson",
        lastName: "Doe",
        age: 55,
        email: "jackson.doe@gmail.com",
    },
];

// Задача 1
// увеличить возраст пользователей на 1

users.forEach((user) => {
    console.log(user.age += 1);
});