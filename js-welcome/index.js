/*
<article class="card-wrapper">
    <div class="image-wrapper">
        <img class="card-image" src="https://pm1.aminoapps.com/6750/dddd7fbf857879e7a4513d20a85c1c89d5d74a41v2_hq.jpg" alt="John-avatar">
    </div>
    <h2>John</h2>
    <p class="description">Description for John</p>
</article>
*/

const root = document.querySelector('#root');

function createUserCard(user) {
    // 1. Создаём обёртку для картинки
    const imgWrapper = createImageWrapper(user);

    // 2. Создание h2
    const h2 = createElement('h2', {classNames: ['username']}, user.name);

    // 3. Создание p
    const p = createElement('p', {classNames: ['description']}, user.description);

    // 4. Создаём и возвращаем созданный article, в который вложен созданные img, h2, p 
    return createElement('article', {classNames: ['card-wrapper']}, imgWrapper, h2, p);
}

const cardArray = data.map(user => createUserCard(user));

root.append(...cardArray);

/**
 * @param {String} type - тег элемента, который нам нужно создать
 * @param {String[]} classNames - список классов, которые нужно добавить к элементу
 * @param  {...Node} childNodes - список дочерних узлов
 * @returns {HTMLElement}
 */
function createElement(type, {classNames}, ...childNodes) {
    const elem = document.createElement(type);
    elem.classList.add(...classNames);
    elem.append(...childNodes);

    return elem;
}

function imageLoadHandler({target}) {
    const parentWrapper = document.querySelector(`#wrapper${target.dataset.id}`);
    parentWrapper.append(target);
}

function imageErrorHandler({target}) {
    target.remove();
}

function createUserImage(user) {
    const img = document.createElement('img');
    img.setAttribute('src', user.profilePicture);
    img.setAttribute('alt', user.name);
    img.dataset.id = user.id;
    img.classList.add('card-image');

    img.addEventListener('load', imageLoadHandler);
    img.addEventListener('error', imageErrorHandler);
    
    return img;
}

function createImageWrapper(user) {
    // 1. Создание заглушки
    const imgWrapper =  createElement('div', {classNames: ['image-wrapper']});
    imgWrapper.setAttribute('id', `wrapper${user.id}`);

    // 2. Создание img
    const img = createUserImage(user);

    return imgWrapper;
}