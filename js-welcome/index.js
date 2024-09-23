/*

Дан массив [3, 6, 8, 2, 3, 5, 1]
Написать функцию, которая принимает массив в качестве аргумента и возвращает сумму всех элементов массива

*/

const array1 = [3, 6, 8, 2, 3, 5, 1];

function sumArray(array) {
    let sum = 0;
    
    for(let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    
    return sum;
}

console.log(sumArray(array1));

