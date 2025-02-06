'use strict';

function sum(a, b) {
    return a + b;
}

sum(3, 4); // 7
sum (5, 5); // 10
sum(1, 2, 3); // 3

/* 
Задача:

В функции sum найти сумму двух элементов, а все остальные элементы, которые передали в функцию снаружи, при вызове - положить в массив
*/

// rest operator - оператор остаточных параметров
// rest - остаток (с англ.)
// .., .., .., .., -->> []

function sum(a, b, ...arrayOfRestArguments) {
    console.log(arrayOfRestArguments);
    return a + b;
}

console.log(sum(1, 2, 3, 5, 10, 25)); // 3

// function f(arg1, ...rest, arg2) { // ошибка

// }

// Задача: написать стрелочную функцию, которая сумирует любое количество чисел

const arrowSum = (...restArrayOfNumbers) => {
    let sum = 0;

    for(let i = 0; i < restArrayOfNumbers.length; i++) {
        sum += restArrayOfNumbers[i];
    }
    
    return sum;
}

console.log(arrowSum(5, 5, 5));