// array.reduce - используется для обчисления какого-то ОДНОГО значения на основе всех элементов массива
// reduce - приводит все элементы массива до какого-то одного определённого результирующего значения
// array.reduce(callback, initialValue)

const numbersArray = [2, 3, 1, 2, 34, 21];

// Задача: найти сумму numbersArray

function reducer(accumulator, item) {
    // то, что возвращает reducer - обновлнённый аккумулятор
    return accumulator + item;
}

const sum = numbersArray.reduce(reducer, 0); // 0 - начальное значение, с к оторого мы начинаем считать сумму