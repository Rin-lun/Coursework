new Map(); // <-- [['key1', 'value1'], ['key2', 'value2'], ['key3', 'value3']];

// Map.prototype.entries() - метод который будет возвращать итератор. Итератор возвращает пары ключ-значение для каждого элемента

const map1 = new Map([['key1', 'value1'], ['key2', 'value2']]);
const entriesIterator = map1.entries();

entriesIterator.next().value; // ['key1', 'value2'];
entriesIterator.next().value; // ['key2', 'value2'];
entriesIterator.next().value; // value: undefined, done: true


// Map.prototype.keys() - метод, который возвращает итератор с всеми ключами с объкта Map

const keysIterator = map1.keys();

keysIterator.next(); // 'key1'
keysIterator.next(); // 'key2'
keysIterator.next(); // undefined, done: true


// Map.prototype.values() - метод, который возвращает итератор с всеми pyfxtybzvb ключtq с объкта Map

const valuesIterator = map1.values();

valuesIterator.next(); // 'value1'
valuesIterator.next(); // 'value2'
valuesIterator.next(); // undefined, done: true


// Map.prototype.forEach() - используется для итерации (перебора) всех элементов в Map и вызова определённой функции (callback) для каждого элемента

// Задача: вывести на консоль мапу

map1.forEach((value, key, map) => {
    console.log(`${key} - ${value}`);
});


// Map.prototype.delete() - используется для удаления пары ключ-значение с объкта Map соответственно к какому-то ключу

// map1.delete('key1');

console.log(map1.has('key1')); // false
console.log(map1.get('key1')); // undefined


// Map.prototype.clear() - используются для полной очистки объкта Map, удаляя все пары ключ-значение, которые находятся там

// map1.clear();

console.log(map1); // 0


// Задача: вывести на консоль мапу

console.log(...map1);