/*
Параметры по-умолчанию
*/

function sum(a = 10, b = 5) {
    return a + b;
}

console.log(sum()); // 15 (10 + 5)
console.log(sum(3)); // 8 (3 + 5)
console.log(sum(5, 5)); // 10 (5 + 5)


const MIN_ZIP = 8000;
const WORK_DAYS = 21;
const MIN_RATE = MIN_ZIP / WORK_DAYS;

class Worker {
    constructor(name, lastName, dailyRate = MIN_RATE , workingDaysInMonth = WORK_DAYS) {
        this.name = name;
        this.lastName = lastName;
        this.dailyRate  = Number(dailyRate.toFixed(2)) ;
        this.workingDaysInMonth = workingDaysInMonth;
    }

    checkSalaryEmployee() {
        console.log(`${this.name} ${this.lastName} - ${this.dailyRate  * this.workingDaysInMonth}`);
    }
}

const worker1 = new Worker('Gon', 'Slow', 1000, 21);
const worker2 = new Worker('Savanna', 'Loe');
worker1.checkSalaryEmployee();
