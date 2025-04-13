/*
Задание
При наведении на кнопку "Нет" - нужно её спрятать(display: 'none')

*/

const noBtn = document.getElementById('buttonNo');

function ghostBtn(event) {
    // const btn = event.target;
    // btn.style.display = 'none';

    console.log('test');
    
    event.target.removeEventListener('mouseenter', ghostBtn);
} 

noBtn.addEventListener('mouseenter', ghostBtn);