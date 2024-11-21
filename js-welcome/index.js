/*
const numbersArray = [5, 4, 6, 8, 3, -2, 9, -57];
Создать новый массив, в который войдут лишь парные элементы начального массива
*/

const numbersArray = [5, 5, 4, 6, 8, 3, -2, 9, -57];

const newNumbersArray = numbersArray.filter((item) => item % 2 === 0 & item > 0);
console.log(newNumbersArray);