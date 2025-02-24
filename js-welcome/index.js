const date = new Date(); // По умолчанию будет создана системная дата и время
const date1 = new Date('12-31-2023');

console.log(date1.getDate()); // 31; getDate() - используется для получения дня месяца с даты
console.log(date1.getDay()); // 0; getDay() - используется для получения дня недели с даты (0 - воскресениье... 6 - суббота)
console.log(date1.getFullYear()); // 2023; getFullYear() - используется для получения года с даты
console.log(date.getHours()); // getHours - используется для получения часов с даты
console.log(date1.getTime()); // getTime - используется для получения количества милисекунд, которые прошли с 1 января 1970 года 00:00:00

// Задача: найти сумму первого 1000000 чисел

let sum = 0; // 1. Создание переменной

const time1 = new Date // Отрезок времени ДО начала операции 2

for(let i = 0; i <= 1000000; i ++) { // 2. Накопляем сумму
    sum += i;
}

const time2 = new Date(); // Отрезок времени ПОСЛЕ операции 2

console.log(sum); // 3. Консолим накопившуюся сумму

console.log(time2.getTime() - time1.getTime()); // Количество потраченных милисекунл на операцию 2


// Пример с консоль.таймами

console.time('operation'); // включили таймер

let sum2 = 0;
for(let i = 0; i <= 1000000; i ++) { // 2. Накопляем сумму
    sum2 += i;
}

// ...

console.timeEnd('operation');