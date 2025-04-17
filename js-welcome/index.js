// const event = new Event('click');
// console.log(event.composedPath());

const button = document.querySelector('button')

window.addEventListener('click', btnClickHandler);

function btnClickHandler(event) {
    //console.log(event.composedPath())
    console.log(event.target); // тот, на ком сработало событие
    // target - элемент на котором произошло событие
    // target - элемент, к кому будет событие погружаться
    console.log(event.currentTarget); // тот, кому принадлежит eventListener
    // currentTarget - элемент, которому принадлежал обработчик события
}

const clickEvent = new MouseEvent('click');

// button.dispatchEvent(clickEvent);


/*
3 фазы события:

1. Фаза погружения.
Событие происходит на уровне ОС, ОС передает событие браузеру (Window), тот передает событие document -> body -> ..... -> элемент, на котором произошло событие



2. Фаза цели.
Событие достигло элемента, элемент - это таргет

3. Фаза всплытия.
Событие начинает всплывать в обратном направлении, то есть от элемента (таргета) к ОС.

*/