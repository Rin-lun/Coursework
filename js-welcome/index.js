/*
Задача: Создание диапазона чисел с шагом
Условие:
Напиши функцию range, которая принимает три аргумента:

start — начальное число диапазона (включительно).
end — конечное число диапазона (включительно).
step — шаг, с которым будут идти числа в диапазоне.
Функция должна возвращать массив чисел в диапазоне от start до end с шагом step. Если шаг меньше или равен нулю, функция должна выбрасывать ошибку.

Пример:
console.log(range(1, 10, 2)); // [1, 3, 5, 7, 9]
console.log(range(5, 15, 3)); // [5, 8, 11, 14]
console.log(range(10, 10, 1)); // [10]

Подсказки:
Используй Array.from() для создания массива.
Длина массива будет вычисляться как (end - start) / step + 1.
Используй индекс элемента в функции обратного вызова для вычисления каждого числа с шагом.

*/

function range(start, end, step) {
     // Check that all arguments are passed
    if(start === undefined || end === undefined || step === undefined) {
        throw new TypeError('Values must be entered at all arguments');
    }
    // Check for data type
    else if(typeof start !== 'number'|| typeof end !== 'number' || typeof step !== 'number') {
        throw new TypeError('All arguments must be numbers');
    }
    // Check that start is not greater than end
    else if(start > end) {
        throw new RangeError('start cannot be greater than end');
    }
    // Array creation and step transition from start to end
    else {
        return Array.from({length: Math.floor((end - start) / step + 1)}, (v, i) => start + i * step);
    }
}

console.log(range(2, 56, 20));