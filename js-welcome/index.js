function createDiv() {
    const div = document.createElement('div'); // 1. Создаём элемент в памяти
    div.classList.add('box'); // 2. К этому элементу добавляем стилевой класс
    div.append('Hello world'); // 3. К этому элементу добавляем текстовый узел
    document.body.append(div); // 4. Добавляем созданный элемент к body
}

const btn = document.querySelector('button');
btn.addEventListener('click', createDiv);