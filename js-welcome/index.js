/*

Создать форму в HTML
В форме запрашивать имя пользователя

При отправлении формы - поприветствуйте пользователя ("Привет Имя пользователя")
Имя пользователя взять с инпута формы

*/

const form = document.getElementById('name-form');

form.addEventListener('submit', greetingUser);

function greetingUser(event) {
    const form = event.target;
    const nameUser = form[0].value;

    alert(`Hello ${nameUser}`);
}