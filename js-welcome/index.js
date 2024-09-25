// array.concat - используется для объединения двух или больше массивов в новый массив
// array.concat(array1, array2, ..., arrayN)

const array1 = [1, 2, 3, 4];
const array2 = array1.concat([222, 888, 333], [55555, 7777777]);
console.log(array2);


// array.fill() - используется для заполнения всех элементов массива каким-то одним значением
// array.fill(value, start, end); // start, end - не обязательны

const array3 = new Array(5);
console.log(array3.fill(1));


// array.includes - использование для проверки наличия определённого значения в массиве
// array.includes(searchValue, [fromIndex]);

const array4 = [2, 12, 1, 5, 8, 13, 12];
console.log(array4.includes(5));


// array.indexOf - используется для получения первого вхождения опредеёленного значения найденного элемента
// array.indexOf(searchElement, [fromIndex]);

console.log(array4.indexOf(12)); 


// array.join - используется для создания ряда, объядиняя все элементы массива
// array.join([separator]);

const array5 = ['Hello', 'world', 4, 2, 'hi'];
console.log(array5.join(' ')); 


// array.push - используется для добавления одного или нескольких элементов в конец массива
// array push(element1, ..., elementN);

const array6 = [2, 4, 6, 7];
console.log(array6.push(8, 9, 0));


// array.pop - используется для удаления посследнего элемента массива

console.log(array6.pop());