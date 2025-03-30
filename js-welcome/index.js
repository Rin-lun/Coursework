// LIFO

// Last in - first out

// stack overflow - ошибка, которая возникает при переполнении стека

/*

push - вставляем элемент на вершину стека
pop - удаление элемента из вершины стека и возврат удаленного элемента
isEmpty - возвращает true, если стек пустой // false - если стек не пустой
pick - возвращает последний элемент, но ничего не делает с ним и не удаляет из стека

*/

class Stack {
    constructor(maxSize) {
        this._maxSize = maxSize;
        this._size = 0;
}

    get isEmpty() {
        return this._size === 0;
    }

    get size() {
        return this._size;
    }

    get maxSize() {
        return this._maxSize;
    }


    set size(newValue) {
        throw new Error('Access denied');
    }

    set maxSize(newValue) {
        throw new Error('Access denied');
    }


    push(value) {
        if(this.size >= this.maxSize) {
            throw new Error('Stack overflow');
        }
        this[`_${this.size}`] = value;
        this._size++;

        return this.size;
    }

    pop() {
        if(this.size > 0) {
            const lastItem = this[`_${this.size - 1}`];
            delete this[`_${this.size - 1}`];
            this._size--;

            return lastItem;
        }
    }

    pick() {
        return this[`_${this.size - 1}`];
    }
}

const myStack = new Stack(4);