/*

Фабричный метод - способ создавать объекты, который позволяет не указывать конкретный класс объекта
Используем специальную фабрику для создания объектов
Фабрика знает, какой именно объект создать и возвращает его нам

new Student(); // так не делаем!

Обращаемся к фабрике, уведомляем, что нам нужно, фабрика уже будет делать нам экземпляры нужного класса (new Student)

*/

// Абстрактный класс или интерфейс
class Animal {
    constructor(nickname) {
        this.nickname = nickname;
    }

    makeSound() { // абстрактный метод

    }
}

class Dog extends Animal {
    constructor(nickname) {
        super(nickname);
    }

    makeSound() { // виртуальный метод
        console.log('Гав-гав');
    }
}

class Cat extends Animal {
    constructor(nickname) {
        super(nickname);
    }

    makeSound() { // виртуальный метод
        console.log('Мяу-мяу');
    }
}

// Фаюричный класс, который создаёт объекты
class AnimalFactory {
    static createAnimal(type, nickname) {
        switch(type) {
            case 'dog': return new Dog(nickname);
            case 'cat': return new Cat(nickname);
            default: throw new Error(`Неизвестный тип животного: ${type}`);
        }
    }
}

// Применение фабрики для создания объектов

// Создать объект собаки
const dog = AnimalFactory.createAnimal('dog', 'Tuzik');
dog.makeSound(); // Гав-гав

// Создать объект кота
const cat = AnimalFactory.createAnimal('cat', 'Murzik')
cat.makeSound(); // Мяу-мяу