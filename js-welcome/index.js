function MyArray() {
    this.length = 0;
    this.push = function() {
        for(let i = 0; i < arguments.length; i++) {
            this[this.length] = arguments[i];
            this.length++;
        }
    return this.length;
    }
    
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
    }

    this.forEach = function(callback) {
        for(let i = 0; i < this.length; i++) {
            callback(this[i], i, this);
        }
    };
}

const arr = new MyArray();
// arr.push(1);

// Переписать push таким образом, чтобы мог принимать и добавлять к массиву любое количествво переданных элементов
// arr.push(1, 2, 3, 56, 8776);

arr.push(1, 2, 3, 56, 8776);
arr.pop();
arr.forEach((item) => {
    console.log(item ** 2);
});