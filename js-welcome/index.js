class Animal {
    constructor(nickname, color) {
        this.nickname = nickname;
        this.color = color;
    }

    eat() {
        return `${this.nickname} is eating`;
    }
}

// class Dog extends Animal - класс Собаки расширяет  класс Животного (наследует этот класс)
class Dog extends Animal {
    constructor(nickname, color) {
        // super - для унаследования свойств с конструктора класса Животных
        super(nickname, color); 
    }

    gav() {
        return `${this.nickname} gav-gav-gav`;
    }
}

const dog = new Dog('Tuzik', 'black');