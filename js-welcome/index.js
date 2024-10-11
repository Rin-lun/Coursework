function saySomething(howToSay, whatToSay) {
    howToSay(whatToSay)
}

// saySomething(alert, 'hello user');

// Как называются функции, которые принимают другие функции в качестве аргумента?
// HOF - High Order Function

// Как называется функция, которую мы передали как аргумент?
// callback - функция обратного вызова 


// array.forEach - используется для полного перебора (итераии) каждого элемента массива и выполнение определённого действия каждого элемента
// array.forEach(callback)

// Задача: у нас есть массив чисел. Каждое значение этого массива возвести  в квадрат

const array = [1, 2, 3, 4, 5];

array.forEach((item) => {
    console.log(item * item);
});

// aray.map - работает как forEach, только будет возращать новвый массив

const newArray = array.map((item) => {
    return item * item;
});

// Когда мы используем map, в таком случае, значение, которое мы возвращаем  (return) с колбека - оно и будет входить в результирующий массив