/*

https://api.openweathermap.org/data/2.5/weather?q=Dnipro&appid=f7c576ba3699bdd0b98ddcf196639992units=metric

f7c576ba3699bdd0b98ddcf196639992

// Задача: сделать погодный виджет

Алгоритм решения:
1. Сделать вёрстку элементов данных, которые мы будем получать от пользователя про город;
2. Получить данные с api и обработать их (подготовить данные для отрисования в вёрстке);
3. Сделать картку с погодой и отобразить её.

*/

const API_BASE = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'f7c576ba3699bdd0b98ddcf196639992';

const btn = document.querySelector('.btn');

btn.addEventListener('click', buttonClickHandler);

function buttonClickHandler({target}) {
    const selectValue = target.previousElementSibling.value;
    requestAPI(selectValue);
}


function requestAPI (cityName) {
    // 1. Готовим URL
    const url = `${API_BASE}?q=${cityName}&appid=${API_KEY}&units=metric`;
    
    // 2. Делаем запрос
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // 3. Отрисовываем погоду
        displayWeather(data);
    });
}

/*

<article class="weather">
    <p>City name: Kyiv</p>
    <p>Temperature: 7°C</p>
    <p>Weather description: overcast clouds</p>
</article>

*/

function displayWeather(weatherObject) {
    const {name, main: {temp}, weather: [{description}]} = weatherObject;

    // 1. Создаём article 
    const article = document.createElement('article');
    article.classList.add('weather');
    
    // 2. Создаём параграф с названием города
    const cityName = document.createElement('p');
    cityName.append(`City name: ${name}`);

    // 3. Создаём параграф с температурой
    const temperature = document.createElement('p');
    temperature.append(`Temperature: ${temp}°C`);

    // 4. Создаём параграф с описанием погоды
    const weatherDescription = document.createElement('p');
    weatherDescription.append(`Weather description: ${description}`);

    // 5. К article добавлем параграфы, созданные в п.[2-4]
    article.append(cityName, temperature, weatherDescription);

    // 6. Находим section и добавляем к нему article
    const section = document.querySelector('.wrapper');
    section.append(article);
}