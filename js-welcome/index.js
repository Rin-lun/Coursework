// Переписать MyArray на классы

class MyArray {
    constructor() {
        this.length = 0;
    }

    push() {
        for(let i = 0; i < arguments.length; i++) {
            this[this.length] = arguments[i];
            this.length++;
        }

        return this.length;
    }

    pop() {
        if(this.length > 0) {
            const lastItem = this[this.length - 1];
            delete this[this.length - 1];
            this.length--;
            return lastItem;
        } 
        else {
            return undefined;
        }
    }

    forEach(callback) {
        for(let i = 0; i < this.length; i++) {
            callback(this[i], i, this);
        }
    }

    map(callback) {
        // 1.Создали пустой массив. Он будет результирующим массивом
        const resultArray = new MyArray;

        // 2. Пройтись по текущему массиву от начала до конца
        for(let i = 0; i < this.length; i++) {
            // Запихиваем в результирующий массив значение, которое нам будет возвращать (return) колбек
            resultArray.push(callback(this[i], i, this));
        }  

        // 3. Вернуть как результат работы метода map - массив результат
        return resultArray;
    }
}

const arr = new MyArray();

arr.push(1, 2, 3, 56, 8776);

// Задача: создать новый массив, который будет содержать квадраты чисел с массива arr

const doubleNumbers = arr.map(item => item ** 2);