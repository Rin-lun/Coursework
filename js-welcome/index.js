// console.log(t);
// console.dir(t);

// Любая JS функция - объект
// Задача: написать функцию, которая возвращает сумму ЛЮБОГО количества переданных в нее аргументов
function sum() {
    const arrayArgs = Array.from(arguments);
    let sum = 0;
    for(let i = 0; i < arrayArgs.length; i++) {
        sum += arrayArgs[i];
    }
    return sum;
}

console.log(sum(2, 2, 2, 2, 2, 100));