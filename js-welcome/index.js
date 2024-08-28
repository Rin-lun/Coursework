// console.log();
// alert('Hello');

let firstOperand = Number(prompt('Введите первое число: '));
let secondOperand = Number(prompt('Введите второе число: ')); 
let result = firstOperand + secondOperand;

if(Number.isNaN(result) === true) {
    console.log('Введи число!');
} else {
    console.log(result);
}
