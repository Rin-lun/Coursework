/*

Дан правильный пароль = qwerty1234

prompt
Запрашивать пароль через prompt, пока пароль, который вводит пользователь, не совпадёт с тем эталонным пароолем, который лежит в переменной

*/

let passwordTrue = 'qwerty1234';
let password = prompt('Введите пароль:');

while(password !== passwordTrue) {
    alert('Неправильный пароль. Попробуйте снова.');
    password = prompt('Введите пароль:');
}

alert('Добро пожаловать!');


// variant 2

// while(true) {
//     const userPass = prompt('Введіть свій пароль');
//     if(userPass === correctPassword) {
//         break;
//     }
// }

// variant 3

// let isPasswordCorrect = false;

// while(!isPasswordCorrect) { // isPasswordCorrect === false
//     const userPass = prompt('Введіть свій пароль');

//     if(userPass === correctPassword) {
//         isPasswordCorrect = true;
//     }
// }