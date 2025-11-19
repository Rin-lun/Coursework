const p = new Promise(executor); // pending

function executor(resolve, reject) {
    // Задача: сгенерировать любое целое число в диапазоне от 0 до 15
    const number = Math.floor(Math.random() * 15);

    // Если число кратное 2 -> резолвим промис и возвращаем это число
    // Если число не кратное 2 -> реджектим промис и возвращаем ошибку

    if(number % 2 === 0) {
        resolve(number); // fullfilled
    } else {
        const err = new RangeError(`Error heppend: ${number}`);
        reject(err);
    }
}

p.then((number) => {
    console.log(number);
}, (err) => {
    console.log(err);
});