/*
У нас есть функция
function greetingUser(user) {
    // ? <<<--- шаблонный ряд
}

и у нас есть объект

const user = {
    name: 'John',
    surname: 'Doe',
    age: 19
}

Написать функцию greetingUser  таким образом, чтобы она приветствовала пользователя и говорила, сколько ему лет должно исполниться в следующем году

Пример вызова функции:
greetingUser(user); // Hey John Doe. You will be 20 next year

*/

function greetingUser(user) {
    alert(`Hey, ${user.name} ${user.surname}. You will be ${user.age + 1} next year`);
}

const user = {
    name: 'John',
    surname: 'Doe',
    age: 19
}

greetingUser(user);