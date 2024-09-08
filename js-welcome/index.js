/*
Задача
Написать функцию, которая принимает 2 числа (диапазон) и выводит на консоль все числа из этого диапазона, которые делятся на 5.
*/

function rangeNumbersDivisiblebyFive() {
    let number1 = Number(prompt('Введите первое число диапазона:'));
    let number2 = Number(prompt('Введите второе число диапазона:'));
    let result = ''; // Инициализируем пустую строку для хранения результатов

    // Проверка на правильность введнных данных
    if(number1 > number2) {
        alert('Ошибка! Попробуйте ввести начальное число не больше конечного.');
        return;
    } else if(isNaN(number1) || isNaN(number2)) {
        alert('Для получениея результата поле не может быть пустым, введите число!');
        return;
    } else if(number1 === number2) {
        alert('Числа не могут быть равны!');
        return;
    }
    
    // Цикл поиска чисел, кратных 5
    for(let i = number1; i <= number2; i++) {
        if(i % 5 === 0) {
            result += i + ' '; // Добавляем числа в строку
        } 
    }

    // Проверяем результат
    if(result !== '') {
        alert('Числа, кратные 5: \n'  + result)
        console.log(result);
    } else {
        alert('Нет чисел, кратных 5, в этом диапазоне.');
        console.log('Нет чисел, кратных 5.');
    }
    
}

rangeNumbersDivisiblebyFive();