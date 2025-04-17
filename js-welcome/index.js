const button = document.querySelector('button');
const div = document.querySelector('#root');

function eventHandlerButton(event) {
    console.log(('hi from button handler'));
}

const eventHandlerBody = (event) => {
    console.log('Hi from body handler'); 
    event.stopPropagation();
    // target - тот, на котором сработало событие
    // console.log(event.currentTarget); // тот, кому принадлежал обработчик события
    console.log(this);
    // Всередине  Function Declaration и Function Expression, this -> body
    // Arrow Function, this -> Window
}

button.addEventListener('click', eventHandlerButton , {capture: true});
// div.addEventListener('click', eventHandler, {capture: true, once: true});
document.body.addEventListener('click', eventHandlerBody, {capture: true});
// window.addEventListener('click', eventHandler, {capture: true, once: true});