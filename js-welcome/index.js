/*

Задача 2. 

Сделать функцию-конструтор Авто, которое имеет:
- название
- максимальную скорость
- текущую скорость

Спроэктировать методы:
- метод ускорения - он принимает в качестве аргумена определённое ускорение
Учесть, что при ускорении, текущая скорость не может быть выше за макстмальную скорость

- метод замедления - принимает в качестве аргумента определённое замедленние
Учесть, что при замедлении текущая скорость не может быть меньше за 0

- метод остановки

*/

function Auto(nameAuto, maxSpeedAuto, currentSpeedAuto) {
    this.nameAuto = nameAuto;
    this.maxSpeedAuto = maxSpeedAuto;
    this.currentSpeedAuto = currentSpeedAuto;

    // Проверка на правильность введённых значений
    if(isNaN(this.maxSpeedAuto) || isNaN(this.currentSpeedAuto)) {
        return 'Error... Max speed and current speed must be numbers';
    }  else if(this.maxSpeedAuto === 0) {
        return 'Error... Maximum speed of the vehicle cannot be 0';
    } else if(this.currentSpeedAuto > this.maxSpeedAuto) {
        return 'Error... Current speed cannot exceed maximum speed';
    } 

    // Метод ускорения автомобиля
    this.accelerationAuto = function(speed) {
        if(isNaN(speed)) {
            return 'Error...Enter a number for acceleration';
        } else if(speed === 0) {
            return 'Speed of the car remains unchanged';
        }
        
        const newSpeed = this.currentSpeedAuto + speed;

        if(newSpeed > this.maxSpeedAuto) {
            this.currentSpeedAuto = this.maxSpeedAuto;
            return 'Vehicle reached maximum speed: ' + this.maxSpeedAuto;
        } else {
            this.currentSpeedAuto = newSpeed;
            return 'Speed of the car increased to: ' + this.currentSpeedAuto
        }
    }

    // Метод замедления автомобиля
    this.vehicleDeceleration = function(slow) {
        if(isNaN(slow)) {
            return 'Error... Enter the number to slow down';
        } else if(slow === 0) {
            return 'Speed of the car remains unchanged';
        }

        const newSpeed = this.currentSpeedAuto - slow;

        if(newSpeed < 0) {
            this.currentSpeedAuto = 0;
            return 'Vehicle stopped completely';
        } else {
            this.currentSpeedAuto = newSpeed;
            return 'Speed of the car has decreased to: ' + this.currentSpeedAuto;
        }
    }

    // Метод остановки
    this.stopAuto = function() {
        this.currentSpeedAuto = 0;
        return 'Car is standing still';
    }
}

const auto1 = new Auto('Car', 90, 80);
console.log(auto1.accelerationAuto(60));
console.log(auto1.vehicleDeceleration(35));
console.log(auto1.stopAuto());