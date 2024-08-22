let box1 = 'Hello';
let box2; // undefined

box2 = 15; // 15

let secretWord = 15;

//console.log(secretWord)

secretWord = 'worddd';

// console.log(box2); // Не выполнится из-за ошибки на строке 10
// ...

let result1 = 1 + 2; // 3
// console.log(result1);
let result2 = 3 - 2; // 1
// console.log(result2);
let result3 = 2 * 2; // 4
// console.log(result3);
let result4 = 4 / 2; // 2
// console.log(result4);

let result5 = 0.1 + 0.2; // 0.3
// console.log(result5);

let notAllowed = 10 / 0;
// console.log(notAllowed); // Infinity (Бесконечность)

let brrrr = 10 / 'hello world'
// console.log(brrrrr); // NaN
// NaN-Not a Number -->> операция, недопустима с точки зрения математики

// "+"
// складывает числа
// Склеивать строки (конкатенация)
let newLine = 'Hello' + 'world'
// console.log(newLine);

newLine = 5 + 'hello';
// console.log(newLine);

newLine = '1' + 1;
console.log(newLine); // 11