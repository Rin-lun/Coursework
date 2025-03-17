/*
Напишите класс RangeValidator.

В классе должно быть 2 свойства: from, to
from, to - числа, по типу данных.

Задача: реализовать сеттеры и геттеры для обоих свойств
Реализовать такие ограничения: from не может быть больше чем to

Реализовать обычный метод getRange, который должен возвращать массив целых чисел из этого диапазона

const object1 = new RangeValidator(2, 5);
object1.getRange(); // [2, 3, 4, 5]
*/

class RangeValidator {
    constructor(value1, value2) {
        this.from = value1;
        this.to = value2;
    }

    // Setter for from
    set from(value1) {
        if(value1 === undefined) {
            throw new TypeError('value1 undefined');
        }
        if(typeof value1 !== 'number') {
            throw new TypeError('value1 not a number');
        }
        if(value1 < 0) {
            throw new RangeError('value1 must not be below 0');
        }

        this._from = value1;
    }

    // Getter for from
    get from() {
        return this._from;
    }


    // Setter for to
    set to(value2) {
        if(value2 === undefined) {
            throw new TypeError('value2 undefined');
        }
        if(typeof value2 !== 'number') {
            throw new TypeError('value2 not a number');
        }
        if(value2 < 0) {
            throw new RangeError('value2 must not be below 0');
        }

        this._to = value2;
    }

    // Getter for to
    get to() {
        return this._to;
    }


    // Method that returns an array of integers from 'from' to 'to'
    getRange() {
        if(this.from > this.to) {
            throw new Error("from can't be bigger than to");
        }
        let result = [];
        for(let i = this.from; i <= this.to; i++) {
            result.push(i);
        }
        console.log(result);
    }
}

let object1 = new RangeValidator(2, 4);
object1.getRange();