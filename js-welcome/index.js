/*
Существует 3 вида деструктуризации в JS:
1. Деструктуризация объектов 
2. Деструктуризация входных параметров
3. Деструктуризация массивов

*/


// 2
function getFullName({firstName, lastName, ...restObject}) { // все остальное кроме firstName, lastName игнорируется
    console.log(restObject);
    return `${firstName} ${lastName}`;
}

const user2 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 42,
    geolocation: '42.2213123 56.11214545',
    browser: 'Chrome'
}

console.log(getFullName(user2));



// 3
const arr = [1, 2, 3, 4, 5, 6];
// const firstElement = arr[0];

const [firstElement, secondElement, ...restOfArr] = arr;



const user = {
    name: 'John',
    age: 30,
    address: {
        city: 'Kyiv',
        country: 'Ukraine'
    },
    contacts: [
        {email: 'john@gmail.com'},
        {phones: ['+380123456789', '+380123456781', '+380123456782']}
    ]
}

// const {contacts: {phones}} = user;

// const [firstJohnNumber, secondJohnNumber, thirdJohnNumber] = phones;

// const {contacts: {phones: [firstJohnNumber, secondJohnNumber, thirdJohnNumber]}} = user;


// const {contacts: [emailObject, phonesArray]} = user;

// const {email}= emailObject;
// const {phones: [firstJohnNumber, secondJohnNumber, thirdJohnNumber]} = phonesArray;

