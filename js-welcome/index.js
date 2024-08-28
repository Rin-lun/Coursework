/*

Объявленная функция - Finction Declaration

function имя_фуункции(argument1, argument2) {
    тело функции
}

имя_функции(аргумент1, аргумент2);

hoisting - объявление функции поднимается (hoisted) к верхней части кода

*/

greetingUser('James');

function greetingUser(userName) {
    console.log('Привет, ' + userName);
}

greetingUser('Alex');


/*

Function Expression - Функциональное выражение

const имя_функции = function(arg1, arg2) {
    тело функции
}

имя_функции(аргумент1, аргумент2);

*/

// greet('Test'); Приведёт к ошибке!

const greet = function(userName) {
    console.log('Hi, ' + userName);
}

greet('Kevin');


/*

Arrow Function - Стрелочная функция

const имя_функции = (arg1, arg2) => {
    тело функции
}

hoisting не происходит!

*/

// greetArrow('Test'); Приведёт к ошибке!

const greetArrow = (userName) => {
    console.log('Hi ' + userName);
}

greetArrow('Stepan');



// Задача: написать функцию, которая выводит системную дату и время (текущие)

const getDataWithTime = function() {
    // круглыые скобки - когда параметры нам не нужны
    // параметры нам не нужны, когда работа функции не зависит от какого-то внешнего значения
    const dataWithTime = new Date;
    return dataWithTime;
}