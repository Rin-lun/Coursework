/*
Задача 1

Написать функцию, которая возвращает true, если переданный ряд содержит слова 'xxx' или 'viagra'
Если запрещённых слов в ряде нет - возвращает false
chekSpam('bue ViAgRa now'); // true
chekSpam('free xxxxxxx'); // true
chekSpam('innocert rabbit'); // false

*/

function bannedWordSearch (str) {
    str = str.toLowerCase();

    if(!str.includes('xxx') && !str.includes('viagra')) {
        return false;
    } else {
        return true;
    }

}

let str1 = 'bue ViAgRa now';
let str2 = 'free xxxxxxx';
let str3 = 'innocert rabbit';

// console.log(bannedWordSearch(str1));
// console.log(bannedWordSearch(str2));
// console.log(bannedWordSearch(str3));


/*
Задача 2

Написать функцию, которая проверяет, есть ли переданный ряд - палиндромом, не смотря на регистр
Палиндром - это когда ряд с обоих сторон читается одинаково

Anna - палиндром
Mama - не палиндром
Namman - палиндром 

*/

function checkPalindrome (string) {
    let stringToLowerCaseAll = string.toLowerCase()
    let stringNew = stringToLowerCaseAll.split('').reverse().join('');

    return `${string} - ${stringToLowerCaseAll === stringNew ? 'палиндром' : 'не палиндром'}`;
}

let string1 = 'Anna';
let string2 = 'Mama';
let string3 = 'Namman';

console.log(checkPalindrome(string1));
console.log(checkPalindrome(string2));
console.log(checkPalindrome(string3));