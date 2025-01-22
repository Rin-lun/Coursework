/* Задача 1

Задача: создать функцию-конструктор для лестницы. (ladder)
Объект имеет свойство:
currentStair - ступенька, на которой мы сейчас находимся. Изначально = 0

Имеет методы:   <<<--- .prototype
up() - поднимает на ступеньку выше
down() - опускает на ступеньку ниже
showStair() - показывает, на какой ступеньке мы сейчас находимся

*/

function Ladder() {
    this.currentStair = 0;
}

function LadderMethoods() {
    this.up = function() {
        this.currentStair++;
        return this;
    },
    this.down = function() {
        if(this.currentStair > 0) {
            this.currentStair--; 
            return this;
        } else {
            return "Вы уже на самой нижней ступеньке.";
        };
    },
    this.showStair = function() {
        return this.currentStair;
    };
}

Ladder.prototype = new LadderMethoods();

const ladder = new Ladder();
console.log(ladder.up().up().down().showStair());

/* Задача 2 
Перепишите методы таким образом, чтобы возможно было использование чейнинга, то есть чтобы можно было объединить вызов методов в цепочку
const ladder = new Ladder();
ladder.up().up().up().down().up().showStair()
*/