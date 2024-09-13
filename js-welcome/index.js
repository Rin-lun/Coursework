/*

Объекты

const название_объекта = {
    ключ: значение
}

Объекты имеют:
- своства
- методы

*/

const obj = {
    color: 'red',
    fontSize: 2
}

// ООП - Парадигма программироания, которая позволяет создавать программы с использованием объектов, которые имеют свойства и методы

// Задача: описать объект лампочки

const buld = {
    ligtness: 200,
    power: '200W',
    cap: 'small',

    on: function() {
        return 'The light on!';
    },
    off: function() {
        return 'The light off';
    }
}

console.log(buld.ligtness); 
console.log(buld.on());
console.log(buld.off());


const dog = {
    name: 'Tuzik',
    'favorit food': 'meat'
}

console.log(dog.name);
console.log(dog['favorit food']);