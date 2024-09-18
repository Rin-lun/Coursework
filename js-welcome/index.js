/*
Розработка для управления книжным магазином

Предметная область: В книжном магазине у нас будет много книг. Мы их продаём

Все наши книги по сути можно представить в виде объекта с одинаковой структурой.

Задача 1: создать конструктор объектов для представления книг с следующами свойствами
Названите книги, автор, год издания, цена
Спроэктировать методы для получения и установки значений этих свойств


Задача 2: сделать для всех книг метод, который бы вернул цену книги, но с скидкой
*/


function Book(title, author, year, price) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.price = price;

    this.getTitle = function() {
        // реализовать, например, права на доступ к свойству
        return this.title;
    }

    this.getAuthor = function() {
        // реализовать, например, права на доступ к свойству
        return this.author;
    }

    this.getYear = function() {
        // реализовать, например, права на доступ к свойству
        return this.year;
    }

    this.getPrice = function() {
        // реализовать, например, права на доступ к свойству
        return this.price;
    }

    this.setTitle = function(newTitle) {
        // реализлвать, например, какие-то проверки
        this.title = newTitle; 
    }

    this.setAuthor = function(newAuthor) {
        // реализлвать, например, какие-то проверки
        this.author = newAuthor; 
    }

    this.setYear = function(newYear) {
        // реализлвать, например, какие-то проверки
        this.year = newYear; 
    }

    this.setPrice = function(newPrice) {
        // реализлвать, например, какие-то проверки
        this.price = newPrice; 
    }

    this.calculateDiscountPrice = function(discountPercentage) {
        const discountePrice = this.price - (this.price * (discountPercentage / 100));
        return discountePrice;
    }

}

const book1 = new Book('Четыре ветра', 'Кристин Генна', 2020, 450);

// console.log(book1.getTitle());
// console.log(book1.getAuthor());
// console.log(book1.getYear());
// console.log(book1.getPrice());

// book1.setTitle('New Title');
// book1.setAuthor('New Author');
// book1.setYear(2025);
// book1.setPrice(400);

console.log(book1.calculateDiscountPrice(50));
