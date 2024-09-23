// У нас есть какой-то user

const userTelehone1 = '380993809078'
const userTelehone2 = '380993800078'
const userTelehone3 = '380993899078'

const userTelephones = {
    0: '380993809078',
    1: '380993800078',
    2: '380993899078'
}

// Массив (Array) 

// Объявление массива

// 1 способ
const arr = [2, 4, 6, 7];

// 2 способ
const arr2 = new Array(2, 4, 6, 7);

// Способы доступа доступа до элементов массива
arr[0]; // считывание значений элементов массива
arr[0] = 200; // присвоение новых значений для элементов массива

// Задача: вывести все значения массива в консоль

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Задача: у нас есть массив чисел. Вывести в консоль тольао парные числа этого массива

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let i = 0; i < numbersArray.length; i++) {
    if(numbersArray[i] % 2 === 0) {
    console.log(numbersArray[i]);
    }
}

