const num1 = Number(prompt('Введите первое число: '));
const num2 = Number(prompt('Введите второе число: '));

// Задача: написать функцию, которая принимает 2 числа и складывает их

function addTwoNumbers(arg1, arg2) {
    return arg1 + arg2;;
}

let result = addTwoNumbers(num1, num2);
console.log(result);

// Область видимости - определение доступности и видимости переменных в определённых частях кода

/* 
В JS существует 2 основные области

1. Глобальная область видимости - глобальная область видимости охватывает весь документ (программу)
*/

const globalVariable = 10;

function globalFunction() {
    // тело функции ...
}

console.log(globalVariable); // 10

// 2. Локальная область видимости - опрееделяется блоками кода (фигурными скобками)

function testFunction() {
    const localVariable = 20; // Локальная переменная testFunction

    if(true) {
        const innerVariable = 30; // Локальная переменная if
        console.log(innerVariable); // 30
        console.log(localVariable); // 20, localVariable находится в глобальной области вдимости по отношению к if
        console.log(globalVariable); // 10, globalVariable находится в глобальной области вдимости по отношению к if
    }

    console.log(localVariable); // 20
    // console.log(innerVariable);  => Ошибка: innerVariable недоступна здесь
}

testFunction();

// console.log(localVariable); => Ошибка: localVariable недоступна здесь

// 3. Функциональная область видимости  - определяет область видимости, закоторой все переменные доступны всередине функции, независисмо от блоков, в которых они созданы
// (var)

// Summary
/*
Scope - область видимости
(это все наши переменнные, объекты и т.д., которые нам доступны)

Local Scope (локальная область видимости) - это все наши переменные, объкты и т.д. всередине нашой функции

Global Scope (глобальная область видимости) - это все наши переменные, объекты и т.д. с текущего кода
*/