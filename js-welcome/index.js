// array.slice - используется для создания нового масcива, который содержит только какую-то конкретную часть выходного массива
// array.slice(start, end);
// Копирует с индекса M (включительно) до индкекса N (не включительно)
// arr.slice(M, N);

const arr1 =[1, 2, 3, 4, 5, 6, 7, 8];
const arr2 = arr1.slice(2, 4);
console.log(arr2);

const users = [{
    name: 'John',
    lastName: 'Doe'
}, {
    name: 'Jane',
    lastName: 'Doe'
}, {
    name: 'Jack',
    lastName: 'Dosh'
}];

const newUsers = users.slice(); // newUsers - поверхностная копия
const upUsers = newUsers.slice(); // upUsers - поверхностная копия поверхностной копии
