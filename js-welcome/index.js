/*

Задача: у нас есть объект с зарплатами по всем отделениям.
Написать функцию, которая возвращает общую сумму, потраченную на зарплату всех оттделов

*/

const departamentSalary = {
    HR: 120000,
    development: 5500000,
    PR: 50000,
    marketing: 120000,
    asisstant: undefined
}

function totalAmountAllSalaries(departamentSalary) {
    let result = 0;

    for(key in departamentSalary) {
        if(typeof departamentSalary[key] === 'number') {
            result += departamentSalary[key];
        }
    }

    return result;
}

console.log(totalAmountAllSalaries(departamentSalary)); 
