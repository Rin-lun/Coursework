/*

Задача: у нас есть объект, ключем в котором есть день недели, а значение - планы на этот день
Принять от пользователя (через промпт) название дня недели и выдать алерт, что запланировано у пользователя на этот день

*/

const obj = {
    Mon: 'drive lesson',
    Tue: 'dantist visit',
    Wed: 'go to party',
    Thu: 'hard work',
    Fri: 'chill',
    Sat: 'go to park'
}

const nameDay = prompt('Enter the name of the day of the week to find out your plans for that day, where: \n Monday - Mon; \n Tuesday - Tue; \n Wednesday - Wed; \n Thusday - Thu; \n Friday - Fri; \n Saturday - Sat');

alert(obj[nameDay] ? obj[nameDay] : 'Error happened');
