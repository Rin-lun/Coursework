const user = {
    name: 'John',
    lastName: 'Doe',
    age: 20,
    'favorite color': 'red',
    movie: 'Blue moon',
    avatar: 'http://...'
}

/* 
for..in - используется для перебора (итерации) ключей в объекте
НЕ for(;;)

for(variable in object) {
    // Код, что выполняется для каждого свойства
}

variable - переменнная, которая будет принимать значение ключей свойств
object - объект, свойтва (ключи) которого мы хотим перебрать

*/

// Задача: в объекте user вывести название всекх ключей ит свйоств

for(let key in user) {
    console.log(`${key} ---> ${user[key]}`); // key ---> value
}