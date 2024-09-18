/*

Задача 1
Нужно сделать функцию-конструктор Country, которая принимает в качестве аргументов:
- название страны
- популяцию
- площадь
Спроэктировать метод густоты населения
(Густота населения = популяция этой страны / площадь этой страны)

*/

function Country(nameCountry, populationCountry, areaCountry) {
    this.nameCountry = nameCountry;
    this.populationCountry = populationCountry;
    this.areaCountry = areaCountry;

    if(isNaN(this.populationCountry) || isNaN(this.areaCountry)) {
        return 'Error... Population and area should be given by number'
    }

    this.densityPopulation = function() {
        const populationCountry = this.this.populationCountry / this.areaCountry;
        return 'Population density ' + this.nameCountry + ': ' + populationCountry.toFixed(0);
    }
}

const country1 = new Country('Ukraine', 38099158, 579320);