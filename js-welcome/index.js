// Задача: написать функцию суммы положительных чисел 

/**
 * Функция находит сумму двух положительныъ чисел
 * @param {number} a 
 * @param {number} b 
 * @returns {number} сумма a и b
 * @throws {RangeError} если у нас a или b - не есть целым числом 
 * @throws {TypeError} если a или b - не есть числом 
 */
function sumOfPositiveNumber(a, b) {
    if(a < 0 || b < 0) {
        // нужно выбросить тут ошибку
        const error = new RangeError('Какое-то из чисел меньше 0');
        throw(error); // только для ошибки
    }

    if(typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Параметры a и b должны быть числами!')
    }

    return a + b;
}

// throw <объект_ошибки>
// throw - кинуть

try {
    // прописываем тут какой-то код, ожидая, что тут может возникнутть ошибка
    sumOfPositiveNumber(1, -2);
} catch(error) {
    console.log(error);
} 

console.log('Ususal code flow');