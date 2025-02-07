'use strict';

// spread operator
// spred - распаковать (с англ.)
// [] -->> .., .., .., ..,

const numbers = [1, 3, 4, 5];

function sum (a, b, ...restArray) {
    console.log(restArray);
    return a + b; 
}

console.log(sum(...numbers)); // spreed operator
// расспаковали все значения массива numbers в вызов функции sum

// Как различать rest и spred оператор?
// Если оператор стоит в аргументах функции, то это rest - он просто берёт и собирает все остатки параметров
// const arrowSum = (...restArray) => {
//     const sum = restArray.reduce((accumulator, currentValue) => {
//         return accumulator + currentValue;
//     }, 0);

//     return sum;
// }

// Если мы используем оператор на массиве, то это spread - он просто берёт и разбивает массив на много элементов
// Var 1
const numbersMath = [2, 3, 5, 6, 4];

Math.min(...numbersMath); // 1

// Var 2
// Задача: сделать массив с названием copyArray в который будет входить все элементы массива numbersArray

const copyArray = [...numbersMath];


// Задача
// Нужно склеить эти 2 массива. Нельзя использовать метод concat 

const array1 = [1, 2, 4, 5, 7, 8, 9];
const array2 = [3412, 43, 21, 1, 7, 3];

const newArray = [...array1, ...array2];
console.log(newArray);