/*
Задача
Написать игру FizzBuzz для 100 чисел.

Игра FizzBuzz - это задача, при которой игрок начинает с 1, а затем это число постепенно инкрементируется. Если число делится на 3, игрок говорит «Fizz». Если число делится на 5, игрок говорит «Buzz». Если число делится и на 3, и на 5, игрок говорит «FizzBuzz». Если число не делится ни на 3, ни на 5, игрок просто называет число

Возможно, более подробно об этой игре описано здесь - https://ru.wikipedia.org/wiki/Fizz_buzz
*/

function FizzBuzz() {
    let num = Number(prompt('Введите число от 1 до 100:'));
    
    if(num < 1) {
        alert('Число не должно быть меньше 1.');
        console.log('Ошибка ввода...');
        return;
    } else if(num > 100) {
        alert('Число не должно быть больше 100.');
        console.log('Ошибка ввода...');
        return;
    } else if(isNaN(num)) {
        alert('Введите число.');
        console.log('Ошибка ввода...');
        return;
    }

    for(let i = 1; i <= num; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz!');
        } else if(i % 3 === 0) {
            console.log('Fizz!'); 
        } else if(i % 5 === 0) {
            console.log('Buzz!');
        } else {
        console.log(i);
        }
    }
}

FizzBuzz();
