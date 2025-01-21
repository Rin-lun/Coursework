const cat = {
    name: 'Barsik',
    color: 'red',
    age: 1
}

const cat2 = {
    name: 'Murzik',
    color: 'black',
    age: 5
}

const catMethods = { // прототип
    run: function() {
        console.log(`${this.name} is runnning!`);
    },
    meow: function() {
        console.log(`${this.name} said meow!`);
    }
}

// Как прикрутить catMethods к объекту cat?

cat.__proto__ = catMethods; // прототипная ссылочность
cat2.__proto__ = catMethods;