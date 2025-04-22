/*

Дан section, на который нужно клацать мышкой
Дан div, который должен перместиться на точку, в которую клацнули мышкой

*/

const field = document.querySelector('#game-field');
const box = document.querySelector('#box');

field.addEventListener('click',  clickHandler, {capture: true});

function clickHandler(event) {
    // если мы нажимаем не на игровое поле (то есть квадратик) - перемещение не происходит
    // event.stopPropagation(); // это и есть фикс ошибки

    //  target - на каком элементе произошло событие (на какой именно нажали)
    // cbrrentTarget - какому элементу принадлежал обработчик события
    if(event.currentTarget === event.target) { // если мы нажимаем на игровое поле - будет перемещение; это и есть фикс ошибки
        const {target: {children: {box}}, clientX, clientY} = event;
    
        box.style.top = `${clientY}px`;
        box.style.left = `${clientX}px`;
    }

}