const dogArray = [{
    nickname: 'Tuzik',
    color: 'black',
    weight: 3,
    age: 2
}, {
    nickname: 'Dolly',
    color: 'white',
    weight: 5,
    age: 3
}, {
    nickname: 'Fagot',
    color: 'black',
    weight: 9,
    age: 5
}, {
    nickname: 'Stus',
    color: 'black',
    weight: 15,
    age: 1
}]

/*
Задача 2
Отфильтровать всех собак, кроме белых
*/

const newArray = dogArray.filter((item) => item.color === 'black');
