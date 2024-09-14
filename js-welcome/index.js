// Конструктор определяет шаблон или "скелет" объектов, которые будут создаваться 

/*
Условия в функции конструкторе:

1. Имя функции-конструктора должна начинаться с большой буквы
2. Функция-конструктор должна выполняться только с помощью оператораnew
*/

// Задача: написать функцию конструктор для создания кота

function Cat(name, color, breed, age) {
    this.name = name; // this - ссылание на вот этого новосозданного кота
    this.color = color;
    this.breed = breed;
    this.age = age;

    this.run = function() {
        return this.name + 'Is running';
    }
}

// Задача: создать котов с помощью нашегй функции конструктора

const cat1 = new Cat('Bublik', 'white', 'dworowyi', 3);
const cat2 = new Cat('Murzik', 'black', 'siam', 4);
