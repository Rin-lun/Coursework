/*

Задание: Создать конвертёр валют

Декомпозиция:

1. Создать HTML-страницу с формой, которая содержит два поля ввода:
одно поле для выведения суммы в одной валюте
другое поле - для выбора валюты, в которую мы будем эту сумму конвертировать

2. Добавить в форму кнопку "Конвертировать"

3. Написать JS обработчик события отправки формы:
- получить значение введённой суммы и выбранноой валюты
- обчислить конвертированную сумму, умножив введённую пользователем сумму на курс обмена выбранной пользователем валюты
- вывести результат конвертации на страницу для отображения результата (innerHTML)

4. Подписать форму на событие "submit", в качестве лисенера используя функцию с пункта 3
*/

const CURRENCY = {
    USD_TO_UAN: 41.28,
    EUR_TO_UAN: 47.01
}

const converterForm = document.querySelector('#currency-converter-form');

converterForm.addEventListener('submit', convertHandler);

function convertHandler(event) {
    event.preventDefault();

    const amount = Number(document.querySelector('#amount').value);
    const currency = document.querySelector('#currency').value;

    let convertedAmont;

    const {USD_TO_UAN: usdCourse, EUR_TO_UAN: eurCourse} = CURRENCY;

    switch(currency) {
        case 'USD': {
            convertedAmont = amount * usdCourse;
            break;
        }
        case 'EUR': {
            convertedAmont = amount * eurCourse;
            break;
        }
        default: throw new Error('Someting problem...');
    }

    // if(currency === 'USD') {
    //     convertedAmont = amount * usdCourse;
    // }
    // else if (currency === 'EUR') {
    //     convertedAmont = amount * eurCourse;
    // }
    // else {
    //     throw new Error('Someting problem...');
    // }

    const resultDiv = document.querySelector('#result');
    resultDiv.innerHTML = `${amount} ${currency} = ${convertedAmont.toFixed(2)} UAN`;
}