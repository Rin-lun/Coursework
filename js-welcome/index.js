class User {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    getFullName() {
        return `${this.name} ${this.surname}`;
    }
}

class Moderator extends User {
    constructor(name, surname, age) {
        super(name, surname, age);
    }

    getFullName() {
        return `${this.name} ${this.surname} -->> ${this.age}`;
    }

    createPost() {
        console.log('Post successfully created');
    }

    deletePost(id) {
        console.log('Post successfully deleted');
    }
}

class Admin extends Moderator {
    constructor(name, surname, age, uniquePrefix) {
        super(name, surname, age);
        this.uniquePrefix = uniquePrefix;
    }

    getFullName() {
        return `${this.name} ${this.surname}`;
    }

    makeModerator(userId) {
        console.log('Moderator successfully sett!');
    }

    deleteModerator(userId) {
        console.log('Moderator successfully deleted!');
    }
}

class Support extends Admin {
    constructor(name, uniquePrefix) {
        super(name, null, null, uniquePrefix);
    }

    getFullName() {
        return `${this.name} -->> ${this.uniquePrefix}`;
    }
}

const user = new User('John', 'Doe', 31);

const moderator = new Moderator('Alex', 'Krane', 45);

const admin = new Admin('Jane', 'Doe', 50, 'Head of Sales');

const support = new Support('William', 'Head of Support');