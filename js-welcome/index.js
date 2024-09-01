
/*
Задача 2.

Сделать калькулятор.

Пользователь последовательно один за другим вводит 
- Первое число
- Второе число 
- Один из вариантов: +, -, *, /

Для каждого математического действия ( +, -, *, /) сделать отдельную функцию
Весь калькулятор - это отдельная функция, роль которой - спросить у пользователя два числа и действие и вернуть ему результат в качестве alert
*/

// Var 1

/*
const number1 = Number(prompt('Введите первое число:'));
const number2 = Number(prompt('Введите второе число:'));
const mathematicalSign = prompt('Введите математический знак из перечисленных: \n +,  -,  *,  /');

function calculation(number1, number2, mathematicalSign) {
    if(mathematicalSign === '+') {
        return number1 + number2;
    } else if (mathematicalSign === '-') {
        return number1 -  number2;
    } else if (mathematicalSign === '*') {
        return number1 * number2;
    } else if (mathematicalSign === '/') {
        return number1 / number2;
    } else {
        return 'Возникла ошибка. Попробуйте ввести корректно.'
    }
}

alert(calculation(number1, number2, mathematicalSign));
*/

// Var 2

const operand1 = Number(prompt('Введите первое число'));
const operand2 = Number(prompt('Введите второе число'));
const action = prompt('Введите необходимое действие: +, -, *, /');

function calculator(operand1, operand2, action) {
    let result; // тут будет лежать остаточыий результат, после действий над операндами

    switch(action) {
        case '+': {
            result = sum(operand1, operand2);
            break;
        }
        case '-': {
            result = substract(operand1, operand2);
            break;
        }
        case '*': {
            result = multy(operand1, operand2);
            break;
        }
        case '/': {
            result = divide(operand1, operand2);
            break;
        }
        default: {
            result = 'Произошла ошибка! Введитье правильное действие +, -, *, /';
        }
    }

    console.log(result);
}

calculator(operand1, operand2, action);

function sum(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multy(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}