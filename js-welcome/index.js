//array.filter - используется для создания массива, который содержит дишь те элементы, которые полходят подопределённое условие
// array.filter(callback)
// Колбек будет вызыватся для каждого элемента массива ->
// -> эта колбек-функция вередине filter она будет возвращать true/false для каждого эоемента массива

const numbersArray = [5, 4, 6, 8, 3, -2, 9, -57];

// Отфильтровать массив numbersArray, чтобы остались лишь положительные числа (числа > 0)

function filterFunction(item) {
    // if(item > 0) {
    //     return true;
    // } else { // item < 0
    //     return false;
    // }

    return item > 0;
}

const filtretNumbersArray = numbersArray.filter(filterFunction);
console.log(filtretNumbersArray);