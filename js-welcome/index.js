const user = {
    'name': 'John', // Ключ - 'name', значение - 'John'
    'favorite color': 'red',
    0: 'value'
}

// Ключем данных может быть ряд или тип данных Symbol

// '.' - оператор доступа за именем свойства (когда речь идёт про валидные идентиыикаторы)

console.log(user.name); //John
// user.'favorite color'; -->> syntax error
// user.0; ->> syntax error

//  [] - оператор доступа к обчислительному свойству (когда ресь идёт про невалидные идентификаторы)
console.log(user['favorite color']); // red
console.log(user[0]); // value

const someObj = {
    2: 10
}

// Задача: получить значение, которая находится под ключём 2

console.log(someObj[2]);
console.log(someObj['2']);