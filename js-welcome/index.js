/*

Попробуйте сделать конвертер из градусов Цельсия в Фариангейты.
Примечание: Формула для перехода от Цельсия в Фарингейт:
Цельсий х 1.8 + 32 = Фаренгейт 

Пример: 1°C x 1.8 + 32 = 33.8°F

*/


const converterForm = document.querySelector('#converterForm');

converterForm.addEventListener('submit', converterFunction);

function converterFunction(event) {
    event.preventDefault();

    const celsius = Number(document.querySelector('#amount').value);

    document.querySelector('#result').innerHTML = `Результат: ${celsius}${'°C'} = ${(celsius * 1.8) + 32}${'°F'}`;
}
