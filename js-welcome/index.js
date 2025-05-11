// timeout - выполняет функцию один раз после какой-то задержки
// interval - выполняет функцию много раз с какай-то задержкой 

// const intervalID = setInterval(() => {
//     console.log('Logging');
// }, 2000);

/*

Написать функцию, которая через каждую секунду выводить числа в консоль от 1 до 10
Выполнить эту задачу через интервалы

*/

function counter() {
    let i = 1;
    const intervalID = setInterval(() => {
        console.log(i++);
        if (i > 10) {
            clearInterval(intervalID); 
            console.timeEnd('1');
        }
    }, 1000);
}

console.time('1');
counter();

