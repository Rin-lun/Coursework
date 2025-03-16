class Test {
    constructor(value1, value2) {
        this.key1 = value1;
        this.key2 = value2;
    }

    method()  {
        // тело метода
    }

    // Вариант 2 для оглошения статического метода - более распространённый
    static myStaticMethod(parameter) {
        // тело функции - что-то мы делаем
        console.log(parameter);
    }
}

// Статические методы - методы, которыми мы можем воспользоваться не отстраивая экземпляр класса
// В середине статических методов мы не используем this

// Вариант 1 для оглошения статического метода
// Test.myStaticMethod = function (parameter) {
//     // тело функции - что-то мы делаем
//     console.log(parameter);
// }

Test.myStaticMethod('123');

const obj1 = new Test('test1', 'test2');
obj1.method();

