/*

Написать класс Worker
У работников есть имя, фамилия, ставка за рабочий день и количество отработанных дней в этом месяце
Метод, который проверяет зарплату этого работника за текущий месяц

*/

class Worker {
    constructor(name, lastName, dailyRate , workingDaysInMonth) {
        this.name = name;
        this.lastName = lastName;
        this.dailyRate  = dailyRate ;
        this.workingDaysInMonth = workingDaysInMonth;
    }

    checkSalaryEmployee() {
        console.log(`${this.name} ${this.lastName} - ${this.dailyRate  * this.workingDaysInMonth}$`);
    }
}

const worker1 = new Worker('Gon', 'Slow', 56, 21);
worker1.checkSalaryEmployee();