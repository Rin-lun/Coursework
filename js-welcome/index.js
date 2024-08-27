// || ("или")
// бинарный оператор, возвращает Boolean 
// Возвращает true (истина), если хотя-бы один из операндов есть истинным

/*
Задача: если выходные или праздник - то это хороший день для отдыха
Сделать вывод.
*/

const isWeekend = true;
const isHoliday = false;

if (isWeekend || isHoliday) { // isWeekend === true || isHoliday === true
    console.log('Хороший день для отдыха');
} else {
    console.log('Нужно работать');
}
