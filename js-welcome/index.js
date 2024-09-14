/* Способы создания объекта

const cat = { // литеральное создание объекта

}

const cat2 = Object(); // Функция-конструктор

const cat3 = new Object(); // Функция-конструктор с оператором new

*/

const cat = {
    name: 'Murzik',
    color: 'Red',
    age: 2,

    eat: function() {
        return 'I am eating'
    },
    sleep: function() {
        return 'I am sleeping'
    }
}

console.log(cat.age); 

cat.age = cat.age + 2;

console.log(cat.age); 

cat.sleep = undefined; // плохая практика

delete cat.sleep; // хорошая практтика

// Adding property

// Задача: добавить имя друга Мурзика к объекту Мурзика

cat.friend = 'Tuzik';

cat['favorit food'] = 'fish';

cat.meow = function() {
    return 'Meow';
}
