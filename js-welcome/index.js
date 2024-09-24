/*

Задача 3. 
Написать функцию, которая находит среднее арифметическое всех элементов массива.
Среднее арифметическое = сумма всех элементов массива / количество элементов массива

[3, 6, 8, 2, 3, 5, 1] //

*/

const array1 = [3, 6, 8, 2, 3, 5, 1];

function arithmeticMean(array) {
    let result = 0;
    
    for(let i = 0; i < array.length; i++) {
        result += array[i];
    }
    
    return result / array.length;
}

console.log(arithmeticMean(array1));

