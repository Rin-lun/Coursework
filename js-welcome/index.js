/*
Variable
Переменная
*/

/*
Создание переменной
ключевое-слово имя-переменной;
var - deprecated
let = CD-RW
const = CD-R
*/

let box;

// console.log(box); // undefined

// "=" - оператор присвоения

box = 3.99995; // Присвоение (Присваивание) (Assign)

// console.log(box); // 3.99995

// Можем определять значение переменной при ее создании
let box2 = 'hello world!'

// console.log(box2); // 'hello world!'

box2 = 236;

//console.log(box2); // 236

let isActive = true;
let isLogged = false;
let isRecording = false;
isRecording = true;

// Присвоение значения из другой переменной

let x = 10;
let y = x; // переменная y получает значение переменной x (y = 10)
//console.log(y); // 10

let z = 10;
let u = z;

u = 15; // u - 15, z - 10

console.log(z); // 10
console.log(u); // 15

/*
Правила нейминга переменных:

1. Используйте осмысленные и описательные имена переменных.
Например:
userName, age, totalAmount

2. Используйте camelCase в JS.

3. Избегайте использования однобуквенных или необъяснимых сокращений.
Например:
x, y, zxc

4. Избегайте пробелов и специальных символов в названиях переменных.

5. Запрещено начинать название переменной с цифры.
// let 1box; // Это запрещено!
*/