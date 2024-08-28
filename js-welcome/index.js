// Задача: Создать функцию, которая принимает число, прибавляет к нему 5 и выводит результат в консоль

function increasingNumber(num) {
    let result = Number(num) + 5;
    // console.log(result);
    return result;
}

const addFiveToNumberResult = increasingNumber(45);

// Задача: написать функцию, которая складывает два числа и возвращает результат расчёта

function addTwoNumbers(num1, num2) {
    const result = num1 + num2;
    return result;
}

const addTwoToNumberResult = addTwoNumbers(3, 6);

console.log(addTwoToNumberResult + addFiveToNumberResult);