/*

Написать функцию, которая принимает ряд и делает каждую первую букву каждого слова с большой буквы    

*/

function capitalizeWords(str) {
    // Розбиваем ряд на отдельные слова
    let words = str.split(' ');

    // Проходим по каждому слову и делаем первую букву большой
    for(let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    // Возвращаем объеденённый ряд с словами, разделённый пробелами 
    return words.join(' ');
}

console.log(capitalizeWords('words flower third'));