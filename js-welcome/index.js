const arr = [2, 3, 5, 67, 43, 32, 23, 76, 8];

// Задача: реализовать функцию ленейного поиска какого-то значения в массиве

function linearSearch(array, value) { // ленейная сложность алгоритма
    for(let i = 0; i < array.length; i++) {
        if(array[i] === value) {
            return i;
        }
    }

    return -1;
}

// console.log(linearSearch(arr, 2));

// Линейная сложность, когда Big 0, то есть, когда столько итераций, сколько у нас входных данных


//  Квадратичная сложность

// Задача: вывести таблицу умножения

function myltyTable(limit) {
    const table = [];
    for(let i = 1; i <= limit; i++) {
        for(let j = 1; j <= limit; j++) {
            table.push(`${i} * ${j} = ${i * j}`);
        }
    }
    return table;
}

// myltyTable(1); // 1 (1^2 = 1)
// myltyTable(2); // 2 (2^2 = 4)


// Квадратичная сложность - когда на выходе получем количество входных данных (n) в квадрате


// Логарифмичная сложность - 100 входных данных припадает приблизительно 6 операций

const arr2 = [2, 3, 4, 5, 6, 7, 8, 9, 10]; // need review

function binarySearch(array, whatToFind) {
    if(whatToFind > array[array.length - 1]) {
        return -Infinity; // на случай, если такого числа точно нет в массиве
    }

    let start = 0;
    let end = array.length - 1;
    let middle = Math.round((start + end) / 2);

    while(true) {
        if(array[middle] === whatToFind) {
            return middle;
        }
        if(array[middle] < whatToFind) {
            start = middle;
            middle = Math.ceil((start + end) / 2);
        }
        else {
            end = middle;
            middle = Math.ceil((start + end) / 2);
        }
    }
}

console.log(binarySearch(arr2, 9)); 