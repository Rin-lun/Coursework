function loadImage(src) {
    // 1. Создаём картинку
    const img = document.createElement('img');
    img.setAttribute('src', src);

    // 2. Создаём элемент в вёрстке, который будет служить нам для того, чтобы указывать, загружаем мы что-то или нет
    const h2 = document.createElement('h2');
    h2.id = 'loading-h2';
    h2.append('Loading image...');
    document.body.append(h2);

    // 3. Возвращаем промис
    return new Promise((resolve, reject) => {
        //  Подписываем созданную картинку на событие load
        // Если картинка загружается - мы резолвим промис с элеменетом картинки
        img.addEventListener('load', () => {
            resolve(img);
        });

        // Подписываем созданную картинку на событие error
        // Если картинка не загружается - мы реджектем с уведомлением про ошибку
        img.addEventListener('error', () => {
            reject('Image can`t be loaded');
        })
    });
}

loadImage('https://kor.ill.in.ua/m/610x385/2722809.jpg')
.then((img) => {
    document.body.append(img);
}, (errorMessage) => {
    const h2 = document.createElement('h2');
    h2.append(errorMessage);
    document.body.append(h2);
})
.finally(() => {
    const loadingH2 = document.querySelector('#loading-h2');
    loadingH2.remove();
});