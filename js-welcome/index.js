/*

Создать функцию-конструктор собаки, у которой должно быть имя, цвет, возраст

Сделать неесколько собак

*/

function Dog(name, color, age) {
    this.name = name;
    this.color = color;
    this.age = age;
}

const dog1 = new Dog('Kij', 'red', 4);
const dog2 = new Dog('Ruwi', ' Black', 1); 