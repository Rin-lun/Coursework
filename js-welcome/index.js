function MyArray() {
    this.length = 0;
}

function MyArrayPrototype() {
    this.push = function() {
        for(let i = 0; i < arguments.length; i++) {
            this[this.length] = arguments[i];
            this.length++;
        }
        return this.length;
    },
    this.pop = function() {
        if(this.length > 0) {
            // 1. Сохранрить последний элемент
            const lastItem = this[this.length - 1];
            // 2. Удалить последний элемент с массива
            delete this[this.length - 1];
            // 3. Уменьшить длину массива на 1
            this.length--;
            // 4. Вернуть удалённый элемент
            return lastItem;
        } else {
            return undefined;
        }
    },
    this.forEach = function(callback) {
        for(let i = 0; i < this.length; i++) {
            callback(this[i], i, this);
        }
    }
}

MyArray.prototype = new MyArrayPrototype(); //прототипная ссылочночность

const arr = new MyArray();
arr.push(1, 2, 3, 56, 8776);
arr.pop();
arr.forEach((item) => {
    console.log(item ** 2);
});

// Какая разница между __proto__ и .prototype?

// __proto__ работает только тогда, когда мы литерально создали объект
{
    //
}

// .prototype - когда обхекты создаются с помощью конструктора