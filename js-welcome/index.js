/*
Задача 1.

prompt
Выведите пользователю предложенное меню 
1 - Сок
2 - Вода
3 - Кофе
4 - Чай
5 - Лимонад

Вывести в консоль напиток, цифру которого выбрал пользователь 
Сделать через Switch-case
*/

const drink = Number(prompt('Выберите напиток: \n 1 - Сок; \n 2 - Вода; \n 3 - Кофе; \n 4 - Чай; \n 5 - Лимонад'));

switch (drink) {
    case 1: {
    console.log('Сок');
    break;
    }
    case 2: {
    console.log('Вода');
    break;
    }
    case 3: {
    console.log('Кофе');
    break;
    }
    case 4: {
    console.log('Чай');
    break;
    }
    case 5: {
    console.log('Лимонад');
    break;
    }
    default: {
    console.log('Введите номер напитка из меню!');
    break;
    }
}
