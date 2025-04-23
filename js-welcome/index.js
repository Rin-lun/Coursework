/*

<article class="card-wrapper">
    <img class="card-image" src="https://pm1.aminoapps.com/6750/dddd7fbf857879e7a4513d20a85c1c89d5d74a41v2_hq.jpg" alt="John-avatar">
    <h2>John</h2>
    <p class="description">Description for John</p>
</article>

*/

const root = document.querySelector('#root');

function createUserCard(user) {
    // 1. Создание article 
    const article = document.createElement('article');
    article.classList.add('card-wrapper');

    // 2. Создание img
    const img = document.createElement('img');
    img.setAttribute('src', user.profilePicture);
    img.setAttribute('alt', user.name);
    img.classList.add('card-image');

    // 3. Создание h2
    const h2 = document.createElement('h2');
    h2.append(user.name);
    h2.classList.add('username');

    // 4. Создание p
    const p = document.createElement('p');
    p.append(user.description);
    p.classList.add('description');

    // 5. Присоеденить к article (п.1) элементы созданные в п.2-4 (img, h2, p)
    article.append(img, h2, p);
    
    // 6. Возвращаем созданный article
    return article;
}

const cardArray = data.map( user => createUserCard(user));

root.append(...cardArray);