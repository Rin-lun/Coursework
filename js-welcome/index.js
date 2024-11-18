// array.sort - используется для сортировки элементов в массиве (мутирующиуй)
// arr.sort([compareFunction])

const numbersArray = [3, 5, 67, 9, 8, 2];

array.sort(); // cортировка поумолчанию (unicode)

const lettersArray = ['bbb', 'abb', 'aaa', 'aba'];
lettersArray.sort(); // cортировка поумолчанию (unicode)

// Задача: отсортировать массив numbersArray по возрастанию

function compareFunction() { // функция-компаратор
// a - текущее просматриваемое число
// b - следующее число, которое следует за текущим
if(b > a) {
    // 4 (a), 6 (b)
    // отсортировать по возрастанию
    reyurn -1;
} else { // b < a
    // 10 (a), 5 (b) --->>> 5, 10
    // отсортировать по возрастанию
    return 1;
}
}

/* Функция-компаратор должна вернуть (return) одно из трёх возможных значений:
-1 - сначала идёт число а, потом число b
0 - элементы остаются на месте
1 - сначала идёт число b, потом число а
*/

numbersArray.sort(compareFunction);

const newNumbersArray = [3, 5, 7, 3, 2, 9, 478, 34];

function compareNumbers(a, b) {
    // return a - b; // сортировка в порядке возрастания
    return b - a; // сортировка в порядке убывания
}

newNumbersArray.sort(compareNumbers);

