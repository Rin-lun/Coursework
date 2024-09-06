// Loops - Циклы

/*
do-while

do {
    тут будет блок кода, который будет циклично выполняться
} while(условие)

*/

const correctPassword = 'qwerty1234';
let userPass;

do {
    userPass = prompt( 'Введите свой пароль:')
} while(userPass !== correctPassword);
