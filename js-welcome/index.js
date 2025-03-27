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
}

const arr = new MyArray();

arr.push(1, 2, 3, 56, 8776);
arr.pop();
arr.forEach((item) => {
    console.log(item ** 2);
});