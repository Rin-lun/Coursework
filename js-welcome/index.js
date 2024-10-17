/*
Задача 3
Создать новый массив пользователей, объекты должны быть в таком виде
{
    fullname: 'John Doe',
    email: ....
}
*/

const users = [{
    name: 'John',
    lastName: 'Doe',
    age: 19,
    email: 'john.doe@gmail.com'
    }, {
    name: 'Jane',
    lastName: 'Doe',
    age: 22,
    email: 'jane.doe@gmail.com'
    }, {
    name: 'Jackson',
    lastName: 'Doe',
    age: 55,
    email: 'jackson.doe@gmail.com'
}]

// function newUserObject(user) {
//     return [{
//         fullname: `${user.name} ${user.lastName}`,
//         email: user.email
//     }]
// }

// const newUsers = users.map(newUserObject);

const newUsers = users.map((user) => {
    return {
        fullname: `${user.name} ${user.lastName}`,
        email: user.email
    };
});

console.log(newUsers);