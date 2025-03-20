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

class Human {
    constructor(surname, firstName, patronymic, age, gender) {
        this.surname = surname;
        this.firstName = firstName;
        this.patronymic = patronymic;
        this.age = age;
        this.gender = gender;
    }

// Setter for surname
set surname(surname) {    
    if(!surname) {
        throw new TypeError('surname cannot be empty');
    }
    if(typeof surname !== 'string') {
        throw new TypeError('surname cannot contain numbers');
    }

    this._surname = surname;
}

// Getter for surname
get surname() {
    return this._surname;
}


// Setter for firstName
set firstName(firstName) {    
    if(!firstName) {
        throw new TypeError('firstName cannot be empty');
    }
    if(typeof firstName !== 'string') {
        throw new TypeError('firstName cannot contain numbers');
    }

    this._firstName = firstName;
}

// Getter for firstName
get firstName() {
    return this._firstName;
}


// Setter for patronymic
set patronymic(patronymic) {    
    if(!patronymic) {
        throw new TypeError('patronymic cannot be empty');
    }
    if(typeof patronymic !== 'string') {
        throw new TypeError('patronymic cannot contain numbers');
    }

    this._patronymic = patronymic;
}
// Getter fo patronymic
get patronymic() {
    return this._patronymic;
}


// Setter for age
set age(age) {    
    if(!age) {
        throw new TypeError('age cannot be empty');
    }
    if(typeof age !== 'number') {
        throw new TypeError('age must contain a number');
    }

    this._age = age;
}

// Getter for age
get age() {
    return this._age;
}


// Setter for gender
set gender(gender) {    
    if(!gender) {
        throw new TypeError('gender cannot be empty');
    }
    if(typeof gender !== 'string') {
        throw new TypeError('gender cannot contain numbers');
    }

    this._gender = gender;
}

// Getter for gender
get gender() {
    return this._gender;
}


// Greeting method
    greeting() {
        if(this.gender === 'men' || this.gender === 'boy') {
            return `Hello Mr. ${this.surname} ${this.firstName}`;
        }
        if(this.gender === 'women' || this.gender === 'girl') {
            return `Hello Mrs. ${this.surname} ${this.firstName}`;
        }

        return `Hello ${this.surname} ${this.firstName}`;
    }
}

class Student extends Human {
    constructor(surname, firstName, patronymic, age, gender, yearAccessions, gradeDiaryNumber, averageScore) {
        super (surname, firstName, patronymic, age, gender);
        this.yearAccessions = yearAccessions;
        this.gradeDiaryNumber = gradeDiaryNumber;
        this.averageScore = averageScore;
    }

    // Setter for yearAccessions
    set yearAccessions(yearAccessions) {    
        if(!yearAccessions) {
            throw new TypeError('yearAccessions cannot be empty');
        }
        if(typeof yearAccessions !== 'number') {
            throw new TypeError('yearAccessions must contain a number');
        }

        this._yearAccessions = yearAccessions;
    }

    // Getter for yearAccessions
    get yearAccessions() {
        return this._yearAccessions;
    }

    // Setter for gradeDiaryNumber
    set gradeDiaryNumber(gradeDiaryNumber) {    
        if(!gradeDiaryNumber) {
            throw new TypeError('gradeDiaryNumber cannot be empty');
        }
        if(typeof gradeDiaryNumber !== 'number') {
            throw new TypeError('gradeDiaryNumber must contain a number');
        }

        this._gradeDiaryNumber = gradeDiaryNumber;
    }

    // Getter for gradeDiaryNumber
    get gradeDiaryNumber() {
        return this._gradeDiaryNumber;
    }


        // Setter for averageScore
    set averageScore(averageScore) {    
        if(!averageScore) {
            throw new TypeError('averageScore cannot be empty');
        }
        if(typeof averageScore !== 'number') {
            throw new TypeError('averageScore must contain a number');
        }
        if(averageScore > 100) {
            throw new RangeError('averageScore cannot be higher than 100 points');
        }
        if(averageScore < 0) {
            throw new RangeError('averageScore cannot be less than 0 points');
        }

        this._averageScore = averageScore;
    }

    // Getter for averageScore
    get averageScore() {
        return this._averageScore;
    }
    

    // Method for identifying an excellent student
    isExcellentStudent() {
        return this.averageScore >= 90;
    };
}


const human = new Human('Go', 'Gun', 'Duuu', 32, 'men');
const student = new Student('Gorgi', 'Natali', 'Gun', 16, 'girl', 2012, 382456, 43);
console.log(human.greeting());
console.log(student.isExcellentStudent());
