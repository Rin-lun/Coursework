/*

1. В HTML имеем элемент img
2. В HTML имеем две кнопки 
Эти кнопки в data-атрибутах содержатся ссылки на определённую картинку (адреса картинок)

3. Задача: за нажатием на кнопку должно отобразиться в тезе img соответсвующая этой кнопке картинка

*/

const [btn1, btn2] = document.querySelectorAll('button');
// const img = document.querySelector('img');

btn1.addEventListener('click', clickHandler);
btn2.addEventListener('click', clickHandler);

function clickHandler({target}) {
    const img = target.parentNode.children[0];
    img.setAttribute('src', target.dataset.src);
}