/*
Задача: Фильтрация нецензурных слов
Напиши функцию filterBadWords(str), которая заменяет запрещённые слова в строке на "***".  
Запрещённые слова: "xxx", "viagra", "badword".

Примеры работы:

console.log(filterBadWords("Buy ViAgRa now!"));   // "Buy *** now!"
console.log(filterBadWords("Free xxxxxxx pills")); // "Free *** pills"
console.log(filterBadWords("This is a badword!")); // "This is a ***!"
console.log(filterBadWords("Clean text here."));  // "Clean text here."

**Подсказки:**
- Используй .replaceAll() или .replace() + регулярные выражения.
- Преобразуй строку в нижний регистр перед проверкой.
- Запрещённые слова могут быть в любом регистре (ViAgRa, XxX, BADword).

*/

function filterBadWords(str) {
    return str.replace(/xxx+/gi, '***')
              .replace(/v+i+a+g+r+a+/gi, '***')
              .replace(/b+a+d+w+o+r+d+/gi, '***');
}

console.log(filterBadWords("Buy ViAgRa now! Viagra is good!"));   
console.log(filterBadWords("Free xxxxxxx pills")); 
console.log(filterBadWords("This is a badword!")); 
console.log(filterBadWords("Clean text here.")); 
