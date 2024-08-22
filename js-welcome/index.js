// Преобразование (приведение) типа данных

// Переобразование типа данных - когда значение изменяет тип данных с одного на другой
// Существует два вида преобразования данных: явное и неявное

// Неявное преобразование типов (impicit type conversion)
let num = 6 - '1';
// console.log(num);

// Явное преобразование типов (explicit type conversion)
// (приведение типов)

let thisIsNumber = Number('45');

// Boolean автоматически (неявно) приводится к типу Number при арифметических расчетах
// true -> 1
// false -> 0

let booleanNumber = true + 1; // 1 + 1 = 2
// console.log(booleanNumber);

// String 

let thisIsString = String(45); // '45'
// console.log(thisIsString);

let testString = null + ''; // неявное приведение типа к strring
// console.log(testString);

// Явное приведение лучше за неявное

let test = 15 - Number('17');
// console.log(test);

// NaN - Not-a-Number
let notANumber = 2 * 'Hello'; // приведение типов невозможно -> некорректная математическая операция -> NaN
// console.log(notANumber);

// () - оператор вызова функции 
// математические операторы (+, -, *, /)
// оепратор конкатинации

// оператор typeof - позволяет получить тип данных операнда
let box = true;
console.log(typeof box); 
