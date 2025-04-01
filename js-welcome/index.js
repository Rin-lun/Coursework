// Задача: с помощью Map связать пользователя с его сообщениями, чтобы по ID пользователя, можно было найти его сообщения


const user1 = {
    firstName: 'Alex',
    lastName: 'Doe',
    id: 1
}

const user2 = {
    firstName: 'John',
    lastName: 'Doe',
    id: 2
}

const johnMessages = ['hello', 'How are you?'];
const alexMessages = ['hi!', 'I`m fine'];


const messageUser = new Map();

messageUser.set((`${user1.id}: ${user1.firstName} ${user1.lastName}`), alexMessages);
messageUser.set((`${user2.id}: ${user2.firstName} ${user2.lastName}`), johnMessages);

console.log(messageUser);