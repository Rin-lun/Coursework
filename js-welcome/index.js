// Задача: создание простенькой TODO

// Базовый уровень

// 1. Сделать инпут для ввода текста
// 2. Сделать кнопку, которая по нажатию, текст из инпута превращает в элемент списка

// <form>
    // <input type="text" />
    // <button>Click to add</button>
// </form>

// <ul>
    // <li>Сделать что-то одно</li>
    // <li>Сделать что-то другое</li>
// </ul>

// Продвинутый уровень

// Задача: к каждому li присоединить кнопку, с помощью которой элемент из списка можно удалить


const input = document.querySelector('input');
const div = document.querySelector('div');
const ul = document.querySelector('ul');
const but = document.querySelector('button');

but.addEventListener('click', listItem);

function listItem(event) {
    event.preventDefault();

    if(input.value.length >= 3) {
        const li = document.createElement('li');
        li.textContent = input.value;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('deleteButton')

        li.append(deleteButton);

        deleteButton.addEventListener('click', function() {
            li.remove(); 
        });

        
        ul.append(li);

        input.value = '';
    } else {
        throw new Error('Value not entered in form');
    }
}
