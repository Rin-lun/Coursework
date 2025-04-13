/*
Сделать кнопку, добавить ей Id
Написать функцию, которая выводит в консоль "привет"
Повесить обработку действия наведения мыши на эту кнопку

*/

function helloUser() {
    console.log('Hello');
}

const button = document.getElementById('button');
button.addEventListener('mouseenter', helloUser);