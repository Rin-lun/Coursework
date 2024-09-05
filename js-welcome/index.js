/*

Детирминованная функция - функция, при одних и тех же аргументах в вызове возвращает всегда один и тот же результат

*/

function sum(a, b) { // детермированная функция
    return a + b;
}

console.log(sum(2, 2)); 

let variable = 5;

function addToNumberSomeVariable(number) { // недетермированная функция
    return number + variable;
}

console.log(addToNumberSomeVariable(5));

variable = 20;

console.log(addToNumberSomeVariable(5));

/// Если функция работает только с теми данными, которые в неё приходят - детерминованная
// Если функция "вылазит на свет", то в таком случае, она может не всегда возвращать один и тот же результат при одних и тех же параметрах - недетерминованная