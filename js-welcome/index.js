// Логические операторы

// Работать эт операторы будут с логическим типом данных (Boolean)

const a = true;
// ! - отрицание
!a; // false

// !! - двойное отрицание
!!a;

// console.log(Boolean(1)); // явное приведение к типу Boolean

// Сравнение чисел

const result1 = 4 > 5; // false
const result2 = 7 < 9; // true

// Сравнение рядов
const result3 = 'a' > 'A'; // 61 > 41 -> true
const result4 = 'b' < 'u'; // 62 < 75 -> true

const result5 = 'test' > 'word'; // 74 > 77 -> false
const result6 = 'test' > 'tord'; // 65 > 6F  -> false

// Проверка равенства чисел

// "==" - приводит два операнда к одному типу данных и потом сравнивает. НЕ РЕКОМЕНДУЕТСЯ
const result7 = 5 == 6; // false
const result8 = 6 == 6; // true
const result9 = '9' == 9; // true

// "===" - равняет операторы за значениеми за типом данных. РЕКОМЕНДУЕТСЯ.
const result10 = '9' === 9; // false
const result11 = 9 === 9; // true

// Больше-или-равно или меньше-или-равно
const result12 = 3 >= 3; // true
const result13 = 6 <= 7; // true

console.log(result6);