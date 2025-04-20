/*

Попробуйте создать несколько HTML элементов через JS. (document.createElement)
Попробуйте добавить какие-то стилевые классы этим элементам. (element.classlist.add)
Попробуйте добавить какой-то текстовый узел для элементов. ( element.append('text....') )
Прицепите созданные элементы к body ( document.body.append(element) )

*/

function clickHello() {
    const div = document.createElement('div');
    div.classList.add('styleDiv');
    div.append('Hi!');
    document.body.append(div);
}

const button = document.querySelector('button');
button.addEventListener('click', clickHello);