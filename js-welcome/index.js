const MIN_ZIP = 8000;
const WORK_DAYS = 21;
const MIN_RATE = MIN_ZIP / WORK_DAYS;

class Worker {
    constructor(name, lastName, dailyRate = MIN_RATE, workingDaysInMonth = WORK_DAYS) {
        if(name === '' || lastName === '') {
            throw new Error('Name and lastName must be a valid');
        }

        this.name = name;
        this.lastName = lastName;

        if(typeof dailyRate !== 'number' || typeof workingDaysInMonth !== 'number') {
            throw new TypeError('Rate and days must be a number');
        }

        if(dailyRate < 0) {
            throw new RangeError('Rate must be a positive number');
        }

        this._dailyRate  = Number(dailyRate.toFixed(2));

        if(workingDaysInMonth < 0 || workingDaysInMonth > 31) {
            throw new RangeError('Days must be in 0 to 31')
        }

        this.workingDaysInMonth = workingDaysInMonth;
    }

    getRate() {
        return this._dailyRate;
    }

    setRate(value) {
        if(typeof value !== 'number') {
            throw new TypeError('Rate must be a number');
        }

        if(value < 0) {
            throw new RangeError('Rate must be a positive number');
        }

        this._dailyRate = value;
    }

    checkSalaryEmployee() {
        console.log(`${this.name} ${this.lastName} - ${this._dailyRate  * this.workingDaysInMonth}`);
    }
}

const worker1 = new Worker('Gon', 'Slow', 1000, 21);
const worker2 = new Worker('Savanna', 'Loe');
worker1.checkSalaryEmployee(); 