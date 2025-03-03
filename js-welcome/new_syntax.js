/*

class MyClass {
    // методы класса
    constructor() {

    }

    method1() {...}
    method2() {...}
    method3() {...}
}

const user = new MyClass()

*/

class User {
    constructor(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName() {
        return `${this.name} ${this.lastName}`;
    }
}

const user1 = new User('John', 'Doe', 56);
const user2 = new User('Jane', 'Freeman', 44);

/*

Правила классов

1. constructor() при создании класса - обязательный
2. Мы не можем самостоятельно обратится к конструктору 
3. Коструктор должен быть только один
4. Как и в функциях конструкторах, название класса пишется с большой буквы

*/