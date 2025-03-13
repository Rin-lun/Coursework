/*

Класс авто
Класс топливо

Задача: посчитать общий вес авто (вес авто + вес топлива)

*/

class Fuel {
    constructor(volume, density) {
        this.volume = volume;
        this.density = density;
    }

    getWeight() {
        return this.volume * this.density;
    }
}

const benzin = new Fuel(50, 0.9);

class Auto {
    constructor(name, ownWeight, fuel) {
        this.name = name;
        this.onWeight = ownWeight;
        this.fuel = fuel;
    }

    // Метод, который обчисляет полный вес авто: его собственный вес ownWeight + вес топлива
    getFullWeight() {
        return this.onWeight + this.fuel.getWeight()
    }
}

const auto1 = new Auto('BMW', 4000, benzin);