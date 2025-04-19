/*

1. Имеем div
2. Имеем 5 кнопок, на каждой из которых написан цвет
3. Задача: За нажатием на кнопку, фоновый цвет (backgroundColor) этого div должна смениться на соответсвующий цвет, указанный на кнопке

*/

const buttons = document.querySelectorAll('button');
const div = document.querySelector('#root');

// for(let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', clickHandler);
// }
for(let btn of buttons) {
    btn.addEventListener('click', clickHandler);
}

function clickHandler({target: {dataset: {color}, parentNode}}) {
    // const {dataset: {color}} = target;
    // const {parentNode} = target;
    
    parentNode.style.backgroundColor = color;
}