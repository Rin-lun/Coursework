/*

HTML
Создать кнопку, которая будет менять тему сайта 

JS
Когда мы нажимаем на эту кнопку - на сайте включается тёмный режим
(для тега body установить backGroundColor = какой-то_цвет
    color: white;
)

Если мы нажимаем на эту кнопку ещё раз - на сайте ВЫКЛЮЧАЕТСЯ тёмный режим
(toogle)

*/

// Получаем элемент изображения по его ID
const image = document.getElementById('changeImage');

// Массив изображений для смены
const images = ['./moon-icon.png', './sun-icon.png'];

// Индекс текущего изображения
let currentIndex = 0;

// Добавляем обработчик события на клик по картинке
image.addEventListener('click', changeBackgroundAndImage);

// Функция для смены фона и изображения
function changeBackgroundAndImage(event) {
    // Меняем цвет фона страницы
    document.body.classList.toggle('bodyColor');
    
    currentIndex = (currentIndex + 1) % images.length; // Увеличиваем индекс и циклично его обновляем
    image.src = images[currentIndex]; // Меняем картинку на основе текущего индекса
}

