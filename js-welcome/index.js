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
Задача 1
Отсортировать собак от старшей к наимладшей
*/

dogArray.sort((dog1, dog2) => {
    if(dog1.age > dog2.age) {
        return -1;
    } else {
        return 1;
    }
}); 
