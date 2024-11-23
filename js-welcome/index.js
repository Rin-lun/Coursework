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

// Задача: отсортировать собак за весом на увелечение (в порядкe возростания)

// dogArray.sort((dog1, dog2) => {
//     if(dog1.weight < dog2.weight) {
//         return -1;
//     } else { // dog1.weight > dog2.weight
//         return 1;
//     }
    
// });

/*
-1 - dog1, dog2
0 - все на месте
1 - dog2, dog1
*/

dogArray.sort((dog1, dog2) => {
    // return dog1.weight - dog2.weight; // в порядке возрастания
    return dog2.weight - dog1.weight; // в порядке спадания
});