/*

Разработать алгоритм, который будет отображать режим нашего дня.

Необходимо разработать ункцию, которая принимает ту или иную пору дня (утро, день, вечер) и выполняет те или иные дествия, которые мы используем в указанную пору дня

*/

function todo(timeOfDay) { // HOF
    // morning - список дел на утро
    // lunch - список дел на день
    // evening - список дел на вечер

    switch(timeOfDay) {
        case 'morning': {
            brushingTeeth();
            scincare();
            breakfast();
            break;
        }
        case 'lunch': {
            goToOffice();
            coding();
            lunch();
            coding();
            break; 
        }
        case 'evening': {
            education();
            coding();
            goToHome();
            shower();
            brushingTeeth();
            scincare();
            sleep();
            break;
        }
        default: {
            console.log('Ошибка, такой поры дня не учтено');
        }
    }
}


todo('morning');

function brushingTeeth() {
    console.log('brushing teeth');
}

function scincare() {
    console.log('scincare');
}

function breakfast() {
    console.log('breakfast');
}

function goToOffice() {
    console.log('go to office');
}

function coding() {
    console.log('coding');
}

function lunch() {
    console.log('lunch');
}

function education() {
    console.log('education');
}

function goToHome() {
    console.log('go to home');
}

function shower() {
    console.log('shower');
}

function sleep() {
    console.log('sleep');
}