// Set - множество, набор уникальных значений

const set = new Set;

// Set.prototype.add() - он добавляет элемент с заданным значением в конец объекта Set 

set.add(1);
set.add(4);
set.add('Hello');


// Set.prototype.has() - проверяем наличие елемента в множине

console.log(set.has(1)); // true
console.log(set.has(12)); // false


// Set.prototype.delete() - удаляет элемент с множины

set.delete('Hello');


// Set.prototype.values() - используется для получения итератора, который возвращает нам все значения с объкта Set

const valuesIterator = set.values();

valuesIterator.next().value; // 1
valuesIterator.next().value; // 4
valuesIterator.next().value; // undefined, done: true

const arrayFromSet = [...set.values()];