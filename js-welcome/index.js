// Очередь

/*

1. Enqueue - вставляет элемент в конец очереди
2. Dequeue - удаляет элемент из начала очереди

*/

class Queue {
    constructor() {
        this._head = 0;
        this._tail = 0;
    }
    
    get size() {
        return this._tail - this._head;
    }

    enqueue(value) {
        // tail отвечает на вопрос, какой элемент должен быть последним
        this[this._tail] = value;
        this._tail++;
        return this.size
    }

    dequeue() {
        if(this.size > 0) {
            const firstItem = this[this._head];
            delete this[this._head];
            this._head++;
            return firstItem;
        }
        else {
            return undefined;
        }
    }
}

const queue = new Queue();
