'use strict';
// strict mode

console.log(this); // this указывает на глобальный объект Window

// this  в глобальной области видимости ссылается на объект Window

function test() { // Function Declaration
    console.log(this); // this указывает на функцию
}

test();

// Function Expression
const test2 = function() {
    console.log(this); // this указывает на функцию
}

test2();

console.log(this); // this указывает на глобальный объект Window

// Весь код, окруженный фигурными скобками - контекст выполнения

/*
Strict mode запустил такой механизм, что в Fanction Declaration и Function Expression появляется свой собственный контекст выполения
Контекстом выполнения становаится сама функция, а не глобальный объект window
*/

// Arrow Function 
const test3 = () => { 
    console.log(this); // this указывает на глобальный объект Window
    // Стрелочная функция не имеет своего собственного контекста выполнения
}

test3();
