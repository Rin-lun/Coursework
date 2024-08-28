/* 
Задача 1

Напишите функцию, которая принимает 2 числа и возвращает то, которое больше
*/

function greaterNumber(num1, num2) {
    if(num1 > num2) {
        return num1;
    } else if(num1 < num2) {
        return num2;
    } else {
        return 'Ошибка!';
    }
}

const resultGeaterNumber = greaterNumber(23, 18);
console.log(resultGeaterNumber);

/*
Задача 2

Напишите функцию, которая находит среднее арифметическое из двух чисел.
Среднее арифметическое значение = (одно число + второе число) / количество чисел
*/

function averageNumber(number1, number2) {
    const resultAverageNumber = (Number(number1) + Number(number2)) / 2;
    return resultAverageNumber;
}

console.log(averageNumber(45, 43));

/*
Задача 3

Напишите функцию, которая принимает одно число и определяет, является ли оно четным
*/

function honestyNumber(number) {
    if(number % 2 === 0 && number > 0) {
        console.log(number + ' - чётное число');
    } else if(number % 2 !== 0 && number > 0) {
        console.log(number + ' - нечётное число');
    } else if(number <= 0) {
        console.log('Попробуйте ввести число больше ' + number);
    }
    else {
        console.log('Произошла ошибка...');
    }
}

const resultHonestyNumber = honestyNumber(6);