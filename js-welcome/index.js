const MIN_ZIP = 8000;
const WORK_DAYS = 21;
const MIN_RATE = MIN_ZIP / WORK_DAYS;

class Worker {
    constructor(name, lastName, dailyRate = MIN_RATE, workingDaysInMonth = WORK_DAYS) {
        this.name = name;
        this.lastName = lastName;
        this.dailyRate  = Number(dailyRate.toFixed(2));
        this.workingDaysInMonth = workingDaysInMonth;
    }

    /*
    Сеттер - метод для установки значения
    Геттер - метод для получения значения 
    */

// name
    set name(newValue) {
        if(typeof newValue !== 'string') {
            throw new TypeError('name must be a string');
        }
        if(newValue === '') {
            throw new Error('name must be a valid');
        }

        this._name = newValue;
    }

    get name() {
        return this._name;
    }

// lastName
    set lastName(newValue) {
        if(typeof newValue !== 'string') {
            throw new TypeError('lastName be a string');
        }
        if(newValue === '') {
            throw new Error('lastName must be valid');
        }

        this._lastName = newValue;
    }

    get lastName() {
        return this._lastName;
    }

// dailyRate
    set dailyRate(newValue) { // название сеттера - название приватного поля БЕЗ знака нижнего подчёркивания
        if(newValue < 0) {
            throw new RangeError('dailyRate must be a positive number');
        }
        if(typeof newValue !== 'number') {
            throw new TypeError('dailyRate must be a number');
        }

        // НО, в середине сеттера мы работаем с приватным полем
        this._dailyRate = newValue;
    }

    get dailyRate() { // название геттера - название приватного поля БЕЗ знака нижнего подчёркивания
        // НО, в середине геттера мы работаем с приватным поле
        return this._dailyRate;
    }

// workingDaysInMonth
    set workingDaysInMonth(newValue) {
        if(newValue < 0 || newValue > 31) {
            throw new RangeError('workingDaysInMonth must be in 0 to 31');
        }
        if(typeof newValue !== 'number') {
            throw new TypeError('workingDaysInMonth must be a number');
        }

        this._workingDaysInMonth = newValue;
    }

    get workingDaysInMonth() {
        return this._workingDaysInMonth;
    }

    checkSalaryEmployee() {
        console.log(`${this.name} ${this.lastName} - ${this.dailyRate * this.workingDaysInMonth}`);
    }
}

const worker1 = new Worker('Gon', 'Slow', 1000, 21);
const worker2 = new Worker('Savanna', 'Loe');
worker1.checkSalaryEmployee()

/*
В середине класса геттеры/сеттеры работают с приватными полями.
А при обращении к классу снаружи мы работаем с геттерами/сеттерами.
*/


/*
Сделать геттер и сеттер для поля workingDaysInMonth
Предвидеть проверки в сеттерах
Проверить работу сеттера и геттера
*/