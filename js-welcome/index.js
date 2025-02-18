/* Задача: Подсчёт суммы всех элементов двумерного массива

Условие:
Напиши функцию sumMatrix(matrix), которая принимает двумерный массив(матрицу) и возвращает сумму всех его элементов.


const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const sumMatrix = (matrix) => {
    let result = 0;
    for(let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            result += matrix[i][j]
        }
    }
    return result;
}

console.log(sumMatrix(matrix)); // Ожидаемый результат: 45
*/


/* 
1. Найти максимальное число в двумерном массиве

Условие:
Напиши функцию findMax(matrix), которая принимает двумерный массив чисел и возвращает самое большое число.


const matrix2 = [
    [1, 5, 3],
    [10, 7, 6],
    [2, 8, 4]
];

const findMax = (matrix2) => {
    let num = matrix2[0][0];

    for(let i = 0; i < matrix2.length; i++) {
        for(let j = 0; j < matrix2[i].length; j++) {
            if(matrix2[i][j] > num) {
                num = matrix2[i][j];
            }       
        }
    }
    return num;
}

console.log(findMax(matrix2)); // Ожидаемый результат: 10
*/


/*
2. Подсчёт количества чётных чисел в двумерном массиве

Условие:
Напиши функцию countEven(matrix), которая возвращает количество чётных чисел в переданной матрице.

const matrix3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const countEven = (matrix3) => {
    let res = 0;
    for(let i = 0; i < matrix3.length; i++) {
        for(let j = 0; j < matrix3[i].length; j++) {
            if(matrix3[i][j] % 2 === 0) {
                res += 1;
            }
        }
    }
    return res;
}

console.log(countEven(matrix3)); // Ожидаемый результат: 4
*/


/*
3. Поиск индекса числа в матрице

Условие:
Напиши функцию findNumber(matrix, num), которая принимает двумерный массив matrix и число num. Если число есть в массиве, функция должна вернуть его индексы[i, j], иначе null.

const matrix4 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const findNumber = (matrix4, num) => {
    for(let i = 0; i < matrix4.length; i++) {
        for(let j = 0; j < matrix4[i].length; j++) {
            if(num === matrix4[i][j]) {
                return [i, j];
            }
        }
    }
    return null;
}

console.log(findNumber(matrix4, 5)); // Ожидаемый результат: [1, 1]
console.log(findNumber(matrix4, 10)); // Ожидаемый результат: null
*/


/* 
Задача: Построение треугольника из символов

Условие:
Напиши функцию drawTriangle(height), которая принимает число height (высоту треугольника) и рисует треугольник из *.

Пример работы:

drawTriangle(5);

Ожидаемый результат в консоли:

*
**
***
****
*****

Как подойти к решению?
1. Внешний цикл (for) отвечает за количество строк (от 1 до height).
2. Внутренний цикл (for) отвечает за количество * в каждой строке.
 • В первой строке 1 *.
 • Во второй — 2 *.
 • В третьей — 3 *.
 • И так далее, пока не дойдём до height.


const drawTriangle = (height) => {
    for(let i = 0; i < height; i++) {
        let star = '';
        for(let j = 0; j <= i; j++) {
            star += '*';
    }
    console.log(star);
    }
}

drawTriangle(5);
*/