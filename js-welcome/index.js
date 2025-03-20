/*
Класс Человек и последующий класс Студент

1. Создать базовый класс человек с такими свойствами:
- ФИО
- Возраст
- Пол

2. Создать последующий класс Студент, который наследует свойства класса Человек
Добавить к классу Студент такие дополнительные свойства:
- Год вступления
- Номер зачётной книжки
- Средний бал

3. Реализовать следующие методы.

В классе Человек: 
- greering() - этот метод возвращает приветствие для человека, в зависисмооти от его пола (Mr. или Mrs.)

В классе Студент:
- isExcellentStudent() - этот метод проверяет, является ли студент отличником или нет, на основе его среднего балла.
Если средний балл студента выше или равен 90, то метод вернёт true, в другом случае - false

*/

/* +++
Реализовать статический метод в классе Students
Этот метод принимает массив экземпляров класса Students вычисляет и возвращает как результат работы средний балл всех студентов из массива

*/


    /**
     * Валидация значения и его типа
     * @param {any} value - Значение, которое необходимо проверить
     * @param {string} name - Имя свойства, которое проверяется
     * @param {string} expeteType - Ожидаемый тип данных для значения
     * @throws {TypeError} Если тип значеения не соответствует ожидаемому
     * @throws {TypeError} Если значение пустое
     */
    const getValidatedValue = (name, value, expeteType) => {
        if(typeof value !== expeteType) {
            throw new TypeError(`${name} must be a ${expeteType}`);
        }
        if(!value) {
            throw new TypeError(`${name} cannot be empty`);
        }
        
        return value;
    }

/**
 * Класс для заполнения данных человека
*/
class Human {
    /**
    * @param {string} surname - Фамилия человека
    * @param {string} firstName - Имя человека
    * @param {string} patronymic - Отчество человека
    * @param {number} age - Возраст человека
    * @param {string} gender - Пол человека
*/
    constructor(surname, firstName, patronymic, age, gender) {
        this._surname = getValidatedValue('surname', surname, 'string');
        this._firstName = getValidatedValue('firstName', firstName, 'string');
        this._patronymic = getValidatedValue('patronymic', patronymic, 'string');
        this._age = getValidatedValue('age', age, 'number');
        this._gender = getValidatedValue('gender', gender, 'string');
    }

    /**
     * Сеттер для установки и проверки значений
     * @param {string} property - Имя свойства, которое устанавливается
     * @param {any} value - Значение, которое присваивается свойству
     * @throws {TypeError} Если тип данных значения не соответствует ожидаемоу
     * @throws {RangeError} Если возраст или другие данные не соответсвуют ограничениям
    */
    set(property, value) {
        if(property === 'age' && (value < 0 || value > 100)) {
            throw new RangeError('age must be between 0 and 100');
        }

        // Валидация значения с учётом свойства
        switch (property) {
            case 'surname':
            case 'firstName':
            case 'patronymic':
            case 'gender':
                getValidatedValue(property, value, 'string');
                break;
            case 'age':
                getValidatedValue(property, value, 'number');
                break;
            default:
                throw new Error(`Unkown property: ${property}`);
        }

        // Присвоение значения в приватное свойтсво
        this[`_${property}`] = value;
    }
    
    /**
     * Геттер для получения значения свойства
     * @param {string} property - Имя свойства, которое нужно получить
     * @returns {any} Значение свойства
     */

    get(property) {
        return this[`_${property}`];
    }

    /**
     * Метод для приветсвтия в зависимости от пола
     * @returns {string} Приветствие
     */

    greeting() {
        let prefix; // Переменная для сохранения обращения в зависимости от пола
        if(this._gender === 'male') {
            prefix = 'Mr.';
        }  
        else if(this._gender === 'female') {
            prefix = 'Mrs.';
        }
        else {
            prefix = 'Mx.'; // для других случаев, если пол не задан или равен неопределенному значению
        }
        
        return `Hello ${prefix} ${this._surname} ${this._firstName}`;
    }
}


/**
 * Класс для заполнения данных студента, наследующий от класса Human
 * @extends Human
 */
class Student extends Human {
    /**
     * @param {string} surname - Фамилия студента
     * @param {string} firstName - Имя студента
     * @param {string} patronymic - Отчество студента
     * @param {number} age - Возраст студента
     * @param {string} gender - Пол студента
     * @param {number} yearAccessions - Год поступления
     * @param {number} gradeDiaryNumber - Номер зачётной книжкт
     * @param {number} averageScore - Средний балл студента
     */

    constructor(surname, firstName, patronymic, age, gender, yearAccessions, gradeDiaryNumber, averageScore) {
        super(surname, firstName, patronymic, age, gender);
        this._yearAccessions = getValidatedValue('yearAccessions', yearAccessions, 'number');
        this._gradeDiaryNumber = getValidatedValue('gradeDiaryNumber', gradeDiaryNumber, 'number');
        this._averageScore = getValidatedValue('averageScore', averageScore, 'number');
    }

    /**
     * Сеттер для установки и проверки значений
     * @param {string} property - Имя для свойства, которе устанавливается
     * @param {any} value - Значение, которое присваивается свойству
     * @throws {RangeError} Если средний балл выходит за пределы диапазона 0-100
     */
    set (property, value) {
        if(property === 'averageScore' && (value < 0 || value > 100)) {
            throw new RangeError('averageScore must be between 0 and 100');
        }

        switch(property) {
            case 'yearAccessions':
            case 'gradeDiaryNumber':
            case 'averageScore':
                getValidatedValue(property, value, 'number');
                break;
            default:
                throw new Error(`Unkown property: ${property}`);
        }

        super.set(property, value); // Вызываем родительский сеттер
    }

    /**
     *  Метод для проверки, является ли студент отличником
     * @returns {boolean} True, если студент отличник (средний балл >= 90)
     */
    isExcellentStudent() {
        return this._averageScore >= 90;
    }
/**
 * Метод принимает массив экземпляров класса Students вычисляет и возвращает как результат работы средний балл всех студентов из массива
 * @param {object} students Принимаемый массив со всеми студентами
 * @returns {number} Средний бал все учащихся 
 */
    static averageScoreOfAllStudents(students) {
        if(students.length === 0) {
            return 0;
        }

        const result = students.reduce((accumulator, student) => accumulator + student._averageScore, 0) / students.length;
        return result.toFixed();
    }

}


// Пример использования

const human = new Human('Smith', 'John', 'Doe', 25, 'male');
console.log(human.greeting());  // Hello Mr. Smith John

// Устанавливаем и получаем значение
human.set('surname', 'Johnson');  // Устанавливаем фамилию через сеттер
console.log(human.get('surname'));  // Получаем фамилию через геттер

// Создаем объекты студентов
const student1 = new Student('Goro', 'Doe', 'Gun', 16, 'female', 2020, 123454, 85);
const student2 = new Student('John', 'Doe', 'Fyi', 24, 'male', 2021, 123456, 89);
const student3 = new Student('Jane', 'Doe', 'Dety', 34, 'female', 2022, 123457, 70);
const student4 = new Student('Josh', 'Doe', 'Asero', 32, 'male', 2022, 123458, 77);

// Создаём массив со всеми студентами и используем метод для вычесления среднего балла всех учащихся
const students = [student1, student2, student3, student4];
console.log(Student.averageScoreOfAllStudents(students));


