// console.log(this); // Window object

// alert('test'); // window.alert('test')

//console.dir(document);

/*

1. Все элементы на странице - отдельные объекты
2. Все элементы можно подписать на события

*/

function getAlert() {
    alert('Hello user');
}

const buttonElement = document.getElementById('btn');

buttonElement.addEventListener('click', getAlert);
// 1 вариант: зарегестрировали обработчик события нажатия мыши на кнопку
// 2 вариат: повесили обработчик нажатия мыши на кнопку