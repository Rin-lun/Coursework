/*

Задача: у нас есть объект с разными версиями приветствий для пользователя
Вывести пользовавтелю приветствие, в зависимости от значения, которое он ввел

*/

const greets = {
    15: 'Hi',
    17: ' Ya, whats up',
    19: 'Hello',
    30: 'Good morning'
}

const valueFromUser = 19;

console.log(greets[valueFromUser]); // Hello
// greets[19]