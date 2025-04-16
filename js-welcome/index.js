/*

1. Имеем div
2. имеем две кнопки: на одной написано «Сделать красным», на второй - «Сделать зеленым»
3. По нажатию на кнопку, фоновый цвет div из п. 1 должен измениться на соответствующий цвет, указанный на кнопке

*/

const div = document.querySelector('#box');

const [red, green] = document.querySelectorAll('.btn');

red.addEventListener('click', redBtnHandler);

function redBtnHandler(event) {
    // div.style.backgroundColor = 'red';
    div.classList.toggle('bg-color-red');

}

green.addEventListener('click', greenBtnHandler);

function greenBtnHandler(event) {
    // div.style.backgroundColor = 'green';
    div.classList.toggle('bg-color-green');
}