// Замыкание позволяет функциям сохранять доступ к переменным, даже когда эти функции завершают свое выполнение
// Замыкание - способность функции запоминать локальную область видимости


let value = 10; // глобальная область видимости

function wrapper() {
    let value = 20; // локальная область видимости

    console.log('WRAPPER function', value);

    return function log() {
        console. log('LOG function', value);
    }
}


//////////////

// function counter() {
// let i = 0;
// i++;
// return i;
// }

function makeCounter() {
    let i = 0;
    return function() {
        return i++; // i - переменная в замыкании
    }
}


//////

function makeCounterVersion2() {
 // Если будет желание - попробуйте сделать методы, которые будут увеличивать/уменьшать counter на определенное количество единиц
    let counter = 0;

    return {
        increment() {
            return ++counter;
        },
        decrement() {
            return --counter;
        }
    }
}

const fnObj = makeCounterVersion2();