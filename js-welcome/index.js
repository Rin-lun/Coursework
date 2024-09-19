/*

Задача: Написать функцию, которая принимает объект и выводит все значения всех свойств, оформленные *...*
А ключи - "..."

*/

const obj = {
    key1: 'value1'
}

// "key1" : *valu1e*

function stylingObject(obj) {
    for(let key in obj) {
        console.log(`"${key}" : *${obj[key]}*`);
    }
}
stylingObject(obj);
