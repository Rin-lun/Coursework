/*
Map (Карта, Словарь)

Сохраняет пары "ключ: значение"
Имеет размер (size)

Отличия от обычного объекта:
1. Запоминает элементы в том же порядке, в котором мы их и добавляем
2. Ключём может бть любой тип данных: String, Number, Boolean, BigInt, Object -> Function
(Объекты, в том числе функции) передаются за ссылкой

Ключ в коллекции map должен быть уникальным

*/


const vocalbuary = new Map();

vocalbuary.set('cat', 'кот');
vocalbuary.set('dog', 'собака');
vocalbuary.set('eat', 'есть');

// Написать функцию, которая принимает строку на английском языке и переводит эту страку на русский, используя словарь

function translater(str, vocalbuary) {
    const arrayWords = str.toLowerCase().trim().split(' ')
    .map((word) => {
        if(vocalbuary.has(word)) {
            return vocalbuary.get(word);
        }
        else { 
            return word;
        }
    }).join(' ');
    
    console.log(arrayWords);
}

translater('Cat eat dog', vocalbuary);