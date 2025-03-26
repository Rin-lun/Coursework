class Figure {
    constructor(sideQuantity) {
        this.sideQuantity = sideQuantity;
    }

    get sideQuantity() {
        return this._sideQuantity;
    }

    set sideQuantity(newValue) {
        if(newValue < 0) {
            throw new RangeError('Side quantity can`t be less than 0');
        }

        this._sideQuantity = newValue;
    }


    getArea() { 
    }
}

class Triangle extends Figure {
    constructor(a, b, angle) {
        super(3);
        this.a = a;
        this.b = b;
        this.angle = angle;
    }

    get a() {
        return this._a;
    }

    set a(newValue) {
        if(newValue < 0) {
            throw new RangeError('Side cannot be less than 0');
        }

        this._a = newValue;
    }


    get b() {
        return this._b;
    }

    set b(newValue) {
        if(newValue < 0) {
            throw new RangeError('Side cannot be less than 0');
        }

        this._b = newValue;
    }


    get angle() {
        return this._angle;
    }

    set angle(newValue) {
        if(newValue < 0) {
            throw new RangeError('Angle cannot be less than 0');
        }

        this._angle = newValue;
    }


    getArea() { // Виртуальный метод
        return this.a * this.b * Math.sin(this.angle);
    }
}

class Square extends Figure {
    constructor(a) {
        super(4);
        this.a = a;
    }

    get a() {
        return this._a;
    }

    set a(newValue) {
        if(newValue < 0) {
            throw new RangeError('Side cannot be less than 0');
        }

        this._a = newValue;
    }


    getArea() {
        return this.a ** 2;
    }
}


// Задача реализовать класс фигуры Круг

/*
Формула площади круга через радиус
Площадь круга (S) при известном радиусе (r) равна π (3.14) умножить на квадрат радиуса. 
Формула выглядит так: S = π * r²
*/

class Circle extends Figure { 
    constructor(radius) {
        super(0);
        this.radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(newValue) {
        if(newValue <= 0) {
            throw new RangeError('Radius cannot be less than or equal to 0');
        }
        
        this._radius = newValue;
    }

    getArea() {
        const pi = Math.PI;
        return (pi * this.radius ** 2).toFixed();
    }
}



// Задача: написать отдельную функцию, которая будет принимать объект какой-то фигуры и будет вызвать у этой фигуры метод getArea

function getFigureArea(figure) {
    if(figure instanceof Figure) {
        return figure.getArea();
    }

    throw new TypeError('Параметр не является фигурой');
}

const square = new Square(4);
const circle = new Circle(5);

console.log(getFigureArea(square));
console.log(circle.getArea());
