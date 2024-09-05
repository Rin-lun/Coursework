function calculator(num1, num2, functionLink) {
    let result = functionLink(num1, num2);
    return result;
}

console.log(calculator(5, 5, sum)); // sum - ссылка на функцию

// Используя калькулятор, поднести num1 в степень num2
console.log(calculator(3, 2, function (a, b) { // callback
    return a ** b;
}));

function sum(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multy(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

/*

High Order Function (HOF, функция вычшего порядка)
Функция, которая принимает другую функцию в качестве аргумента

Callback - Колбек (функция обратного вызова), - функция, которую мы передали как аргумент при вызове другой функции

*/